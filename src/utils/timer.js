// @flow

let startTime;

export function start() {
  startTime = new Date();
}

export function get() {
  return new Date() - startTime;
}
