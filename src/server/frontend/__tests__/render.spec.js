import React from 'react';
import render from '../render';

test('render', () => {
  expect(render(<div />)).toMatchSnapshot();
});
