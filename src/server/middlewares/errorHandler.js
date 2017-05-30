import PrettyError from 'pretty-error';

const prettyError = new PrettyError();

// eslint-disable-next-line no-unused-vars
export default function errorHandler(err, req, res, next) {
  const stackOutput = prettyError
    .render(err, false, true)
    .replace(/\[1m/gm, '<span style="color: red">')
    .replace(/\[97m/gm, '<span style="color: red">')
    .replace(/\[93m/gm, '<span style="color: blue">')
    .replace(/\[39m/gm, '<span style="color: gray">')
    .replace(/\[32m/gm, '<span style="color: green">')
    .replace(/\[90m/gm, '<span style="color: darkgray">')
    .replace(/\[33m/gm, '<span style="color: black">')
    .replace(/\[\d+m/gm, '<span style="color: gray">')
    .replace(/\[0m/gm, '</span>')
    .replace(/\n/gm, '<br />');

  return res
    .status(500)
    .send(
      `<html></body><h1>Error at path: ${req.path}</h1><code><pre>${stackOutput}</pre></code></body></html>`
    );
}
