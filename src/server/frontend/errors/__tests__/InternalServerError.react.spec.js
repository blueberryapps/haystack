import createStore from '../../../../common/createStore';
import React from 'react';
import translate from '../../../../localization';
import { Error500 } from '../index';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

const store = createStore({ translate }, {});

test('shallowly renders InternalServerError', () => {
  expect(shallow(<Provider store={store}><Error500 /></Provider>)).toMatchSnapshot();
});
