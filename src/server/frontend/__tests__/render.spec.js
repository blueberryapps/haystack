import React from 'react';
import Helmet from 'react-helmet';
import render from '../render';

test('render', () => {
  global.webpackIsomorphicTools = { assets: () => ({ javascript: { app: 'app.xxx.js' } }) };
  Helmet.canUseDOM = false;
  expect(render(<div />)).toMatchSnapshot();
});
