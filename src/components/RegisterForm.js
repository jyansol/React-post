import React, { Component } from 'react';
import api from '../api';
import { Form } from 'semantic-ui-react';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //현재입력필드에 입력된 사용자 이름/암호
      username: '',
      password: '',
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    // FIXME : 사용자 이름 중복체크 해야함, TODO : 게시글 목록 보여주기
    const { data: users } = await api.get('/users', {
      params: {
        username,
      },
    });
    if (users.length > 0) {
      alert('이미사용중임');
      return;
    }
    const res = await api.post('/users/register', {
      username,
      password,
    });
    localStorage.setItem('token', res.data.token);
  }

  // handleUsernameChage(e) {
  //   this.setState({
  //     username: e.target.value,
  //   });
  // }

  // handlePasswordChage(e) {
  //   this.setState({
  //     password: e.target.value,
  //   });
  // }

  handleFieldChange(e, name) {
    // name변수에 저장되어 있는 문자열을 그대로 속성이름으로 사용
    // const res의 username 변수?
    this.setState({
      [name]: e.target.value,
    });
  }

  render() {
    const { username, password } = this.state;
    return (
      <React.Fragment>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <h1>sign up</h1>
          <Form.Input type="text" name="username" value={username} onChange={(e) => this.handleFieldChange(e, 'username')} />
          <Form.Input type="password" name="password" value={password} onChange={(e) => this.handleFieldChange(e, 'password')} />
          <Form.Button>go!</Form.Button>
        </Form>
      </React.Fragment>
    );
  }
}
