import { shallow } from 'enzyme';
import React from 'react';
import App from '../App.react';
import createStores from '../../common/createStores';

const stores = createStores();

test('shallowly renders App', () => {
  const options = { context: { mobxStores: { ...stores } } };
  expect(shallow(<App />, options).shallow()).toMatchSnapshot();
});
