export default function sendTerminalError(req, res, error) {
  const stackOutput = error
    .stack
    .toString()
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
