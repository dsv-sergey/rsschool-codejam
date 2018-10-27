const assert = require('assert');
const sumOfOther = require('./src/sumOfOther');
Object.freeze(assert);
describe('sumOfOther', () => {
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