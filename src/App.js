import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PostListPage from './pages/PostListPage';
import PostDetailPage from './pages/PostDetailPage';
import NewPostForm from './components/NewPostForm';
import EditPostForm from './components/EditPostForm';
import { UserProvider } from './contexts/UserContext';

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

  handleLoginFormPage() {
    this.setState({
      page: 'login',
    });
  }

  handlePostListPage() {
    this.setState({
      page: 'post-list',
    });
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

  render() {
    return (
      <UserProvider onPostListPage={() => this.handlePostListPage()}>
        <div className="App">
          {this.state.page === 'login' ? (
            <LoginForm onRegister={() => this.handleRegisterPage()} />
          ) : this.state.page === 'register' ? (
            <RegisterForm />
          ) : this.state.page === 'post-list' ? (
            <PostListPage
              onDetail={(postId) => this.handlePostDetail(postId)}
              onNewPostFormPage={() => this.handleNewPostFormPage()}
              onLoginFormPage={() => this.handleLoginFormPage()}
            />
          ) : this.state.page === 'post-detail' ? (
            <PostDetailPage
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
      </UserProvider>
    );
  }
}

export default App;
