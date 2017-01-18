import Html from '../Html.react';
import { shallow } from 'enzyme';
import React from 'react';

test('shallowly renders Html', () => {
  expect(shallow(<Html><div></div></Html>)).toMatchSnapshot();
});
