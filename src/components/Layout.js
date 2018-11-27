import React, { Component } from 'react';
import { UserConsumer, withUser } from '../contexts/UserContext';

class Layout extends Component {
  render() {
    const { onLoginFormPage, username, logout } = this.props;
    return (
      <div>
        <div className="header">
          header
          <div>{username}</div>
          {username ? (
            <button onClick={logout}>LOGOUT</button>
          ) : (
            <button onClick={onLoginFormPage}>LOGIN</button>
          )}
        </div>
        <h1 className="title">{this.props.title}</h1>
        {this.props.children}
        <div className="footer">footer</div>
      </div>
    );
  }
}

// div.header안의 기존 코드
// consumer는 영역이 좁지만, 고차컴포넌트로 사용하게되면 영역이 넓어짐
{
  /* <UserConsumer>
  {({ username, logout }) => (
    <React.Fragment>
      <div>{username}</div>
      {username ? <button onClick={logout}>LOGOUT</button> : <button onClick={onLoginFormPage}>LOGIN</button>}
    </React.Fragment>
  )}
</UserConsumer> */
}

// withUser 적용하려면 위에 class의 export default를 지워주고
// 아래에 이렇게 작성해준다
export default withUser(Layout);
