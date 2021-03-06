import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import PostForm from './PostForm';

const actions = {
  onSubmit: action('onSubmit'),
};
storiesOf('PostForm', module)
  .add('default', () => <PostForm {...actions} />)
  // 함수결과를 넣어줌
  .add('editing', () => <PostForm {...actions} editing={true} />);
