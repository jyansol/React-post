import React, { Component } from 'react';
import s from './PostForm.module.scss';
import classNames from 'classnames';
import { Form } from 'semantic-ui-react';

// 새글 및 수정 컴포넌트
// 객체 대괄호 표기법 [] : 결과값이 속성값이 됨
export default class PostForm extends Component {
  static defaultprops = {
    // editing prop : true가 주어지면, 편집 모드 스타일이 적용됨
    editing: false,
    //Form전송시 호출되는 함수, title, body를 인수로 받음
    onSubmit: () => {},
  };

  render() {
    const { editing } = this.props;
    const titleClass = classNames(s.titleInput, {
      [s.editing]: editing,
    });
    return (
      <div>
        <h1>NEW POST</h1>
        <Form
          onSubmit={e => {
            e.preventDefault();
            const title = e.target.elements.title.value;
            const body = e.target.elements.body.value;
            this.props.onSubmit(title, body);
          }}
        >
          <Form.Input
            className={titleClass}
            type="text"
            name="title"
            defaultValue={this.props.title}
          />
          <Form.TextArea
            name="body"
            cols="30"
            rows="10"
            defaultValue={this.props.body}
          />
          <Form.Button>go!</Form.Button>
        </Form>
      </div>
    );
  }
}
