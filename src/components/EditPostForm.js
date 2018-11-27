import React, { Component } from 'react';
import PostForm from './PostForm';
import api from '../api';

export default class EditPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
  }

  async componentDidMount() {
    const {
      data: { title, body },
    } = await api.get(`/posts/${this.props.postId}`);
    this.setState({
      title,
      body,
    });
  }

  async handleSubmit(title, body) {
    await api.patch(`/posts/${this.props.postId}`, {
      title,
      body,
    });
    this.props.onDetail(this.props.postId);
  }

  render() {
    const { title, body } = this.state;
    if (!title) {
      return 'loading...';
    }
    return <PostForm editing={true} onSubmit={(title, body) => this.handleSubmit(title, body)} title={title} body={body} />;
  }
}
