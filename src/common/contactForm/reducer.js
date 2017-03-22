import * as actions from './actions';
import { Record } from 'immutable';

export const InitialState = Record({
  formSendingStatus: ''
});


export default function fieldsReducer(state = new InitialState(), action) {
  if (!(state instanceof InitialState)) return new InitialState(state);

  switch (action.type) {
    case actions.SEND_EMAIL_SUCCESS: {
      return state.set('formSendingStatus', 'SUCCESS');
    }

    case actions.SEND_EMAIL_ERROR: {
      return state.set('formSendingStatus', 'ERROR');
    }

    case actions.CLEAR_STATUS: {
      return state.set('formSendingStatus', '');
    }
  }

  return state;
}
