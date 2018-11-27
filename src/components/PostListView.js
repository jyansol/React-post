import React, { Component } from 'react';
import classNames from 'classnames';
import withLoading from '../hoc/withLoading';
import { Helmet } from 'react-helmet';
// 상태는 PostList에 두자!
class PostListView extends Component {
  render() {
    const { onDetail, onNewPostFormPage, posts, loading } = this.props;
    const titleClass = classNames('PostList__title', {
      'PostList__title--loading': loading,
    });
    return (
      <React.Fragment>
        <Helmet>
          <title>게시물목록</title>
        </Helmet>
        <div className="PostList">
          <h1 className={titleClass}>POST LIST</h1>
          <button onClick={() => onNewPostFormPage()}>NEW POST</button>
          <ul className="PostList__list">
            {posts.map(post => (
              <li
                className="PostList__item"
                key={post.id}
                onClick={() => onDetail(post.id)}
              >
                {post.title}
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default withLoading(PostListView);
