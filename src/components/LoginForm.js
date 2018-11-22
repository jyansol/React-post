import React from 'react';
import { UserConsumer } from '../contexts/UserContext';

export default class LoginForm extends React.Component {
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

  render() {
    const { onRegister } = this.props;
    return (
      <UserConsumer>
        {({ login }) => (
          <React.Fragment>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const username = e.target.elements.username.value;
                const password = e.target.elements.password.value;
                login(username, password);
              }}
            >
              <h1>Login</h1>
              <input ref={this.usernameRef} type="text" name="username" />
              <input ref={this.passwordRef} type="password" name="password" />
              <button>Login</button>
            </form>
            <button onClick={() => onRegister()}>sign up</button>
          </React.Fragment>
        )}
      </UserConsumer>
    );
  }
}
