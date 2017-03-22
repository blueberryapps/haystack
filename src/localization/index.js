import { fromJS } from 'immutable';
import defaultEn from './defaults';
import en from './releases/en.json';

export default {
  messages: fromJS({
    defaultEn,
    en
  }),
  locale: 'en',
  fallbackLocale: 'defaultEn'
};
