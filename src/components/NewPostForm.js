import React, { Component } from 'react';
import api from '../api';
import PostForm from './PostForm';

export default class NewPostForm extends Component {
  async handleSubmit(title, body) {
    const res = await api.post('/posts', {
      title,
      body,
    });
    this.props.onDetail(res.data.id);
    //res.data새로생성된 data
  }
  render() {
    return <PostForm onSubmit={(title, body) => this.handleSubmit(title, body)} />;
  }
}
