import React, { Component } from 'react';
import { UserConsumer } from '../contexts/UserContext';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="header">
          header
          <UserConsumer>{({ username }) => <div>{username}</div>}</UserConsumer>
        </div>
        <h1 className="title">{this.props.title}</h1>
        {this.props.children}
        <div className="footer">footer</div>
      </div>
    );
  }
}
