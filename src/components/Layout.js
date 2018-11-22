import React, { Component } from 'react';
import { UserConsumer } from '../contexts/UserContext';

export default class Layout extends Component {
  render() {
    const { onLoginFormPage } = this.props;
    return (
      <div>
        <div className="header">
          header
          <UserConsumer>
            {({ username, logout }) => (
              <React.Fragment>
                <div>{username}</div>
                {username ? <button onClick={logout}>LOGOUT</button> : <button onClick={onLoginFormPage}>LOGIN</button>}
              </React.Fragment>
            )}
          </UserConsumer>
        </div>
        <h1 className="title">{this.props.title}</h1>
        {this.props.children}
        <div className="footer">footer</div>
      </div>
    );
  }
}
