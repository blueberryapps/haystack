import { shallow } from 'enzyme';
import React from 'react';
import InternalServerError from '../InternalServerError.react';

test('shallowly renders InternalServerError', () => {
  expect(shallow(<InternalServerError />)).toMatchSnapshot();
});
