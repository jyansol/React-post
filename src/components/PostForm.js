import React, { Component } from 'react';
import s from './PostForm.module.scss';
import classNames from 'classnames';

// 새글 및 수정 컴포넌트
// 객체 대괄호 표기법 [] : 결과값이 속성값이 됨
export default class PostForm extends Component {
  render() {
    const { editing } = this.props;
    const titleClass = classNames(s.titleInput, {
      [s.editing]: editing,
    });
    return (
      <div>
        <h1>NEW POST</h1>
        <form onSubmit={(e) => this.props.onSubmit(e)}>
          <input className={titleClass} type="text" name="title" defaultValue={this.props.title} />
          <textarea name="body" cols="30" rows="10" defaultValue={this.props.body} />
          <button>go!</button>
        </form>
      </div>
    );
  }
}
