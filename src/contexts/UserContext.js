import React, { Component } from 'react';
import api from '../api';
import { unregister } from '../serviceWorker';

// UserContext는 횡단 관심사!
// 로그인과 관련된 외부세계와 관련된 코드
// {} 기본값 설정 - provider가 없을때, 기본값을 사용할 수 있다
const { Provider, Consumer } = React.createContext({
  username: 'qqqq',
  id: 3,
  login: () => {},
  logout: () => {},
});

export default class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      username: null,
    };
  }

  async componentDidMount() {
    if (localStorage.getItem('token')) {
      await this.refreshUser();
    }
  }

  // 서버에 요청을 보내서 정보를 받아오는 기능만 있으면 되고
  // loginform은 얘한테 알려만 주면 됨
  async login(username, password) {
    const res = await api.post('/users/login', {
      username,
      password,
    });
    localStorage.setItem('token', res.data.token);
    await this.refreshUser();
    this.props.onPostListPage();
  }

  logout() {
    //localStorage.removeItem('token')
    localStorage.removeItem('token');
    //사용자 정보 캐시 초기화 => 캐시는 위험해
    this.setState({
      id: null,
      username: null,
    });
    // to do : 로그인 폼 보여주기
  }

  async refreshUser() {
    const res2 = await api.get('/me');
    this.setState({
      id: res2.data.id,
      username: res2.data.username,
    });
  }

  render() {
    const value = {
      username: this.state.username,
      id: this.state.id,
      login: this.login.bind(this),
      logout: this.logout.bind(this),
    };
    return (
      <div>
        <Provider value={value}>{this.props.children}</Provider>
      </div>
    );
  }
}

// with로 시작하는것이 관례적, 매개변수명칭도 관례적
// 함수형 컴포넌트를 반환하는 예시 : 함수형 컴포넌트는 엘리먼트를 반환

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withUser(WrappedComponent) {
  function WithUser(props) {
    return (
      <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
    );
  }
  WithUser.displayName = `WithUser(${getDisplayName(WrappedComponent)})`;
  return WithUser;
}

export { UserProvider, Consumer as UserConsumer, withUser };
