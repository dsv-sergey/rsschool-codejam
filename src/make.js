/**
 * @param args - arguments
 * @returns reduce arguments
 */
module.exports = function make(...args) {
  if (typeof args[args.length - 1] === 'function') {
    const fn = args.pop();
    return args.reduce(fn);
  }
  return make.bind(this, ...args);
};