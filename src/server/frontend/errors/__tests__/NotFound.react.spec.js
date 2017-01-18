import NotFound from '../NotFound.react';
import { shallow } from 'enzyme';
import React from 'react';

test('shallowly renders NotFound', () => {
  expect(shallow(<NotFound path="whatever" />)).toMatchSnapshot();
});
