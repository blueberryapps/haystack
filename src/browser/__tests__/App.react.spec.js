import App from '../App.react';
import { shallow } from 'enzyme';
import React from 'react';

test('shallowly renders App', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
