import { actions as onionActions } from 'onion-form';

const FileAPI = process.env.IS_BROWSER ? require('fileapi') : () => null;

export const CLEAR_STATUS = 'CLEAR_STATUS';
export const SEND_EMAIL = 'SEND_EMAIL';
export const SEND_EMAIL_SUCCESS = 'SEND_EMAIL_SUCCESS';
export const SEND_EMAIL_ERROR = 'SEND_EMAIL_ERROR';

export function clearForm() {
  return onionActions.clearFormProperty('contact', 'value');
}

export function sendEmail({ name, email, message, cvFile }) {
  return ({ dispatch }) => {
    const url = '/api/send-email';
    const data = { name, email, message };
    const promise = uploadCv(url, data, cvFile).then(() => {
      setTimeout(() => dispatch(clearForm()), 3000);
      setTimeout(() => dispatch({ type: CLEAR_STATUS }), 3000);
    });

    return {
      type: SEND_EMAIL,
      payload: { promise }
    };
  };
}

function uploadCv(url, data, cv) {
  return new Promise((resolve, reject) => {
    FileAPI.upload({
      url,
      data,
      files: { cv }, // must be 'cv', checked on the server by multer package
      complete: (err, xhr, file) => (err ? reject() : resolve()), // eslint-disable-line no-unused-vars
    });
  });
}
