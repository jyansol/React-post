import React from 'react';

export default function withLoading(WrappedComponent) {
  return function WithLoading(props) {
    const { loading, ...rest } = props;
    if (loading) {
      return 'LOADING...';
    } else {
      return <WrappedComponent {...rest} />;
    }
  };
}
