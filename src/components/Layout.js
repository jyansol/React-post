import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="header">header</div>
        <h1 className="title">{this.props.title}</h1>
        {this.props.children}
        <div className="footer">footer</div>
      </div>
    );
  }
}
