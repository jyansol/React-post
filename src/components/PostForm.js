import React, { Component } from 'react';
import s from './PostForm.module.scss';

// 새글 및 수정 컴포넌트
export default class PostForm extends Component {
  render() {
    return (
      <div>
        <h1>NEW POST</h1>
        <form onSubmit={(e) => this.props.onSubmit(e)}>
          <input className={s.titleInput} type="text" name="title" defaultValue={this.props.title} />
          <textarea name="body" cols="30" rows="10" defaultValue={this.props.body} />
          <button>go!</button>
        </form>
      </div>
    );
  }
}
