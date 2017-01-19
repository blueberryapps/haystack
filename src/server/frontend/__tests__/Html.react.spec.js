import { shallow } from 'enzyme';
import React from 'react';
import Html from '../Html.react';

test('shallowly renders Html', () => {
  expect(shallow(<Html><div /></Html>)).toMatchSnapshot();
});
