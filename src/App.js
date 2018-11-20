import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

// 로그인폼에 회원가입 버튼
// 버튼 클릭하면 회원가입 폼 보여주기
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'post-list',
      // page === 'post-list' -> 게시글 목록
      // page === 'login -> 로그인 폼
      // page === 'register' -> 횐가입
      // page === 'post-detail' -> 게시물세부페이지
      postId: null,
      // 현재보고있는 게시물의 아이디
    };
  }

  handleRegisterPage() {
    this.setState({
      page: 'register',
    });
  }

  handlePostDetail(postId) {
    this.setState({
      page: 'post-detail',
      postId,
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.page === 'login' ? (
          <LoginForm onRegister={() => this.handleRegisterPage()} />
        ) : this.state.page === 'register' ? (
          <RegisterForm />
        ) : this.state.page === 'post-list' ? (
          <PostList onDetail={(postId) => this.handlePostDetail(postId)} />
        ) : this.state.page === 'post-detail' ? (
          <PostDetail postId={this.state.postId} />
        ) : null}
      </div>
    );
  }
}

export default App;
