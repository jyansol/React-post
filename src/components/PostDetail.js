import React, { Component } from 'react';
import api from '../api';
import Layout from './Layout';

export default class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 서버로부터 자료를 가져오지 않았을때, 빈문자열을 보여주다가 정보를 가져와서 그려주기때문에 상태에 필요함
      body: '',
      title: '',
    };
  }
  // 받아와서 표시해줄때, 화면이 표시되는 시점에 componentDidMount()를 이용해 데이터를 가져옴
  async componentDidMount() {
    const { postId } = this.props;
    const {
      data: { title, body },
    } = await api.get(`/posts/${postId}`);
    this.setState({
      body,
      title,
    });
  }

  render() {
    const { title, body } = this.state;
    const { postId, onEditPostFormPage, onPostListPage } = this.props;
    return (
      <Layout title="타-란!">
        <button onClick={() => onPostListPage()}>BACK</button>
        <h1>post detail</h1>
        <button onClick={() => onEditPostFormPage(postId)}>EDIT</button>
        <h2>{title}</h2>
        <p>{body}</p>
      </Layout>
    );
  }
}
