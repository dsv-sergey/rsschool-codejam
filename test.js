const assert = require('assert');
const sumOfOther = require('./src/sumOfOther');
const make = require('./src/make.js');
const recursion = require('./src/recursion.js');

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
    }
    assert.deepEqual(make(15)(34, 21, 666)(41)(sum), 777);
  });
  it('make("15")("34, 21, 666")("41")(sum) === "1534, 21, 66641"', () => {
    function sum(a, b) {
      return a + b;
    }
    assert.deepEqual(make('15')('34, 21, 666')('41')(sum), '1534, 21, 66641');
  });
  it('make(15)(34, 21, 666)("41")(sum), "73641"', () => {
    function sum(a, b) {
      return a + b;
    }
    assert.deepEqual(make(15)(34, 21, 666)('41')(sum), '73641');
  });
});
describe('recursion', () => {
  it('recursion is function', () => {
    assert.deepEqual(typeof recursion, 'function');
  });
  it('recursion(tree) === [[100], [90, 120], [70,99,110,130]]', () => {
    const tree = {
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } },
    };
    const array = recursion(tree);
    assert.deepEqual(array, [[100], [90, 120], [70, 99, 110, 130]]);
  });
});
