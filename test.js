const assert = require('assert');
const sumOfOther = require('./src/sumOfOther');
const make = require('./src/make');
Object.freeze(assert);
describe('sumOfOther', () => {
  it('sumOfOther is function', () => {
    assert.deepEqual(typeof sumOfOther, 'function');
  });
  it('sumOfOther([2, 3, 1]) === [4, 3, 5]', () => {
    const sum = sumOfOther([2, 3, 1]);
    assert.deepEqual(sum, [4, 3, 5]);
  });
  it('sumOfOther([0, 0, 0, 0]) === [0, 0, 0, 0]', () => {
    const sum = sumOfOther([0, 0, 0, 0]);
    assert.deepEqual(sum, [0, 0, 0, 0]);
  });
  it('sumOfOther([0, 1, 0, 0]) === [1, 0, 1, 1]', () => {
    const sum = sumOfOther([0, 1, 0, 0]);
    assert.deepEqual(sum, [1, 0, 1, 1]);
  });
});

describe('make', () => {
  it('make is function', () => {
    assert.deepEqual(typeof make, 'function');
  });
  it('make(15)(34, 21, 666)(41)(sum) === 777', () => {
    function sum(a, b) {
      return a + b;
    };
    assert.deepEqual(make(15)(34, 21, 666)(41)(sum), 777)
  });
  it('make("15")("34, 21, 666")("41")(sum) === "1534, 21, 66641"', () => {
    function sum(a, b) {
      return a + b;
    };
    assert.deepEqual(make('15')('34, 21, 666')('41')(sum), '1534, 21, 66641')
  });
  it('make(15)(34, 21, 666)("41")(sum), "73641"', () => {
    function sum(a, b) {
      return a + b;
    };
    assert.deepEqual(make(15)(34, 21, 666)('41')(sum), '73641')
  });
});
