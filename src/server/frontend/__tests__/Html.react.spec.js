import { shallow } from 'enzyme';
import React from 'react';
import Html from '../Html.react';

const props = {
  bodyHtml: '<div />',
  javascripts: { app: 'app.xxxx.js' }
};

test('shallowly renders Html', () => {
  expect(shallow(<Html {...props} />)).toMatchSnapshot();
});
