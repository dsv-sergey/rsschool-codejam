/**
 * @param arr - original array
 * @returns array, each element at index i is the sum of the remaining elements
 *          of the original array
 */
module.exports = function sumOfOther(arr = []) {
  const resultArr = [];
  arr.forEach((val, index, array) => {
    resultArr.push(array.reduce((a, b) => a + b) - val);
  });
  return resultArr;
};
