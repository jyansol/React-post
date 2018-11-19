import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

// 로그인폼에 회원가입 버튼
// 버튼 클릭하면 회원가입 폼 보여주기
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'login',
      // localStorage.getItem("token") ? "board" : "login"
    };
  }

  handleResigerPage() {
    this.setState({
      page: 'register',
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.page === 'login' ? (
          <LoginForm onRegister={() => this.handleResigerPage()} />
        ) : this.state.page === 'register' ? (
          <RegisterForm />
        ) : null}
      </div>
    );
  }
}

export default App;
