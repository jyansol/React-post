import React, { Component } from 'react';
import api from '../api';
import Layout from './Layout';

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: false,
    };
  }

  // componentDidMount가 비동기 함수라고 할지라도 기다려주지 않음
  // PostList가 최초 한번 그려지고 난 뒤에 componentDidMount를 실행
  // data를 받아오고 나서 그리지 않음, 일단 한번 받아오고나서 그리는 것임
  async componentDidMount() {
    const res = await api.get('/posts');
    this.setState({
      posts: res.data,
    });
  }

  render() {
    // const {} 로 App에서 내려쥼
    const { posts } = this.state;
    const { onDetail, onNewPostFormPage } = this.props;
    return (
      <Layout title="POST LIST">
        {/* <h1>POST LIST</h1> */}
        <button onClick={() => onNewPostFormPage()}>NEW POST</button>
        <ul>
          {posts.map((post) => (
            <li key={post.id} onClick={() => onDetail(post.id)}>
              {post.title}
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}
