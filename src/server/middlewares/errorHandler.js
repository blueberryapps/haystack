// @flow
import PrettyError from 'pretty-error';
import type { $Request, $Response } from 'express';

const prettyError = new PrettyError();

export default function errorHandler(err: Error, req: $Request, res: $Response, next? :Function) { // eslint-disable-line no-unused-vars
  const stackOutput = prettyError.render(err, false, true)
    .replace(/\[1m/mg, '<span style="color: red">')
    .replace(/\[97m/mg, '<span style="color: red">')
    .replace(/\[93m/mg, '<span style="color: blue">')
    .replace(/\[39m/mg, '<span style="color: gray">')
    .replace(/\[32m/mg, '<span style="color: green">')
    .replace(/\[90m/mg, '<span style="color: darkgray">')
    .replace(/\[33m/mg, '<span style="color: black">')
    .replace(/\[\d+m/mg, '<span style="color: gray">')
    .replace(/\[0m/mg, '</span>')
    .replace(/\n/gm, '<br />');

  return res.status(500).send(`<html></body><h1>Error at path: ${req.path}</h1><code><pre>${stackOutput}</pre></code></body></html>`);
}
