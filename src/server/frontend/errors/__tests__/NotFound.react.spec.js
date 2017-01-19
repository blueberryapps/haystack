import { shallow } from 'enzyme';
import React from 'react';
import NotFound from '../NotFound.react';

test('shallowly renders NotFound', () => {
  expect(shallow(<NotFound path="whatever" />)).toMatchSnapshot();
});
