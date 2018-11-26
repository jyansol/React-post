import React, { Component } from 'react';
import Layout from './Layout';
import { UserConsumer } from '../contexts/UserContext';

export default class PostDetailView extends Component {
  render() {
    const { userId, postId, onEditPostFormPage, onPostListPage, title, body } = this.props;
    return (
      <Layout title="타-란!">
        <h1>post detail</h1>
        <UserConsumer>
          {({ id }) => {
            if (userId === id) {
              return <button onClick={() => onEditPostFormPage(postId)}>EDIT</button>;
            }
          }}
        </UserConsumer>
        <button onClick={() => onPostListPage()}>BACK</button>
        <h2>{title}</h2>
        <p>{body}</p>
      </Layout>
    );
  }
}
