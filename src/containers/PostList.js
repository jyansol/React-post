import React, { Component } from 'react';
import api from '../api';
import Layout from '../components/Layout';
import { UserConsumer } from '../contexts/UserContext';
import classNames from 'classnames';
import '../components/PostList.scss';
import PostListView from '../components/PostListView';

export default class PostList extends Component {
  static defaultprops = {
    onLoginFormPage: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
    };
  }

  // componentDidMount가 비동기 함수라고 할지라도 기다려주지 않음
  // PostList가 최초 한번 그려지고 난 뒤에 componentDidMount를 실행
  // data를 받아오고 나서 그리지 않음, 일단 한번 받아오고나서 그리는 것임
  async componentDidMount() {
    const res = await api.get('/posts');
    this.setState({
      posts: res.data,
      loading: false,
    });
  }

  render() {
    const { onDetail, onNewPostFormPage } = this.props;
    // const {} 로 App에서 내려쥼
    // Layout에 적용 onLoginFormPage={onLoginFormPage}
    return <PostListView posts={this.state.posts} loading={this.state.loading} onDetail={onDetail} onNewPostFormPage={onNewPostFormPage} />;
  }
}
