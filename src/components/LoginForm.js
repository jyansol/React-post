import React from 'react';
import api from '../api';

export default class LoginForm extends React.Component {
  async handleSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const res = await api.post('/users/login', {
      username,
      password,
    });
    localStorage.setItem('token', res.data.token);
  }

  render() {
    const { onRegister } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h1>Login</h1>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <button>Login</button>
        </form>
        <button onClick={() => onRegister()}>sign up</button>
      </React.Fragment>
    );
  }
}
