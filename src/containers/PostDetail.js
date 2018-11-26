import React, { Component } from 'react';
import PostDetailView from '../components/PostDetailView';
import api from '../api';

export default class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 서버로부터 자료를 가져오지 않았을때, 빈문자열을 보여주다가 정보를 가져와서 그려주기때문에 상태에 필요함
      body: '',
      title: '',
      userId: null,
    };
  }
  // 받아와서 표시해줄때, 화면이 표시되는 시점에 componentDidMount()를 이용해 데이터를 가져옴
  // 내가 쓴 글일때만 수정되게
  async componentDidMount() {
    const { postId } = this.props;
    const {
      data: { title, body, userId },
    } = await api.get(`/posts/${postId}`);
    this.setState({
      body,
      title,
      userId,
    });
  }
  render() {
    const { onEditPostFormPage, onPostListPage, postId } = this.props;
    const { userId, title, body } = this.state;
    return (
      <PostDetailView
        userId={userId}
        onEditPostFormPage={onEditPostFormPage}
        onPostListPage={onPostListPage}
        postId={postId}
        title={title}
        body={body}
      />
    );
  }
}
