// @flow
let startTime : Date;

export function start(): void {
  startTime = new Date();
}

export function get(): number {
  return new Date() - startTime;
}
