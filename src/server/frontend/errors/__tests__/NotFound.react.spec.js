import createStore from '../../../../common/createStore';
import React from 'react';
import translate from '../../../../localization';
import { Error404 } from '../index';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
const store = createStore({ translate }, {});

test('shallowly renders Not Found', () => {
  expect(shallow(<Provider store={store}><Error404 /></Provider>)).toMatchSnapshot();
});
