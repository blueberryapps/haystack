/**
 * Tests value for Promise
 *
 * @function isPromise
 * @param {String} value - Value to be tested
 * @return {Boolean} - Whether value is promise or not
 */
export default function isPromise(value) {
  if (value && typeof value === 'object') {
    return typeof value.then === 'function';
  }

  return false;
}
