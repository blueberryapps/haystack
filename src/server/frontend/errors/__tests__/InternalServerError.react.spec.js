import InternalServerError from '../InternalServerError.react';
import { shallow } from 'enzyme';
import React from 'react';

test('shallowly renders InternalServerError', () => {
  expect(shallow(<InternalServerError />)).toMatchSnapshot();
});
