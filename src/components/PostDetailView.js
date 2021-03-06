import React, { Component } from 'react';
import Layout from './Layout';
import { UserConsumer } from '../contexts/UserContext';
import withLoading from '../hoc/withLoading';
import { Helmet } from 'react-helmet';

class PostDetailView extends Component {
  render() {
    const {
      userId,
      postId,
      onEditPostFormPage,
      onPostListPage,
      title,
      body,
    } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>게시물 - {title}</title>
        </Helmet>
        <h1>post detail</h1>
        <UserConsumer>
          {({ id }) => {
            if (userId === id) {
              return (
                <button onClick={() => onEditPostFormPage(postId)}>EDIT</button>
              );
            }
          }}
        </UserConsumer>
        <button onClick={() => onPostListPage()}>BACK</button>
        <h2>{title}</h2>
        <p>{body}</p>
      </React.Fragment>
    );
  }
}

export default withLoading(PostDetailView);
