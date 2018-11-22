import React, { Component } from 'react';
import api from '../api';

// 로그인과 관련된 외부세계와 관련된 코드
const { Provider, Consumer } = React.createContext();

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
    };
    return (
      <div>
        <Provider value={value}>{this.props.children}</Provider>
      </div>
    );
  }
}

export { UserProvider, Consumer as UserConsumer };
