import React from 'react';
import { UserConsumer } from '../contexts/UserContext';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    // DOM node를 가리키는 화살표다!
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  // 이 기능을 UserProvider로 옮겨
  // async handleSubmit(e) {
  //   e.preventDefault();
  //   const username = this.usernameRef.current.value;
  //   const password = this.passwordRef.current.value;
  //   // const password = e.target.elements.password.value;
  //   // form을 안쓰면서 제어되는 구문을 쓰고 싶을때는 Ref를 반드시 써야함
  //   const res = await api.post('/users/login', {
  //     username,
  //     password,
  //   });
  //   localStorage.setItem('token', res.data.token);
  // }

  // Consumer로 받으려면, render()내부가 복잡해짐.
  // props를 통해 onSubmit함수를 내려줌
  handleSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    this.props.login(username, password);
  }
  render() {
    const { onRegister } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h1>Login</h1>
          <input ref={this.usernameRef} type="text" name="username" />
          <input ref={this.passwordRef} type="password" name="password" />
          <button>Login</button>
        </form>
        <button onClick={() => onRegister()}>sign up</button>
      </React.Fragment>
    );
  }
}

//함수형 컴포넌트 위에 class 앞에 export default지워줬음
// render() 안에서 범위가 좁게 사용하던걸 export해줌으로써 props로 여러군데에서 사용
// 받은 props를 loginForm에 내려주는 코드 => 사용법이 <loginForm/> 과 같다
// LoginForm 부분을 Component라는 매개변수로 받아서
// export default withUser('component이름')으로 짧게 쓸 수 있음
export default (props) => {
  return <UserConsumer>{({ login }) => <LoginForm {...props} login={login} />}</UserConsumer>;
};
