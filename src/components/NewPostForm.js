import React, { Component } from 'react';
import api from '../api';

export default class NewPostForm extends Component {
  async handleSubmit(e) {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const body = e.target.elements.body.value;
    const res = await api.post('/posts', {
      title,
      body,
    });
    this.props.onDetail(res.data.id);
    //res.data새로생성된 data
  }
  render() {
    return (
      <div>
        <h1>NEW POST</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" name="title" />
          <textarea name="body" cols="30" rows="10" />
          <button>go!</button>
        </form>
      </div>
    );
  }
}
