import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import NewPostForm from './components/NewPostForm';
import EditPostForm from './components/EditPostForm';

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
      // page === 'new-post-form' -> 새 글쓰기 페이지
      // page === 'edit-post-form' -> 수정페이지
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

  handleNewPostFormPage() {
    this.setState({
      page: 'new-post-form',
    });
  }

  handleEditPostFormPage(postId) {
    this.setState({
      page: 'edit-post-form',
      postId,
    });
  }

  handlePostListPage() {
    this.setState({
      page: 'post-list',
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
          <PostList onDetail={(postId) => this.handlePostDetail(postId)} onNewPostFormPage={() => this.handleNewPostFormPage()} />
        ) : this.state.page === 'post-detail' ? (
          <PostDetail
            postId={this.state.postId}
            onEditPostFormPage={(postId) => this.handleEditPostFormPage(postId)}
            onPostListPage={() => this.handlePostListPage()}
          />
        ) : this.state.page === 'new-post-form' ? (
          <NewPostForm onDetail={(postId) => this.handlePostDetail(postId)} />
        ) : this.state.page === 'edit-post-form' ? (
          <EditPostForm postId={this.state.postId} onDetail={(postId) => this.handlePostDetail(postId)} />
        ) : null}
      </div>
    );
  }
}

export default App;
