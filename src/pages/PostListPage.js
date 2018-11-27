import React, { Component } from 'react';
import Layout from '../components/Layout';
import PostList from '../containers/PostList';

//분리하고싶은 경우에만 분리

export default class PostListPage extends Component {
  render() {
    // const {} 로 App에서 내려쥼
    // Layout에 적용 onLoginFormPage={onLoginFormPage}
    // const { posts, loading } = this.state;
    const { onDetail, onNewPostFormPage, onLoginFormPage } = this.props;
    return (
      <Layout title="게시물목록" onLoginFormPage={onLoginFormPage}>
        <PostList onDetail={onDetail} onNewPostFormPage={onNewPostFormPage} />
      </Layout>
    );
  }
}
