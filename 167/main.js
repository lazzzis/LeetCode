/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let start = 0
  let end = numbers.length - 1
  while (start < end) {
    if (numbers[start] + numbers[end] > target) {
      end--
    } else if (numbers[start] + numbers[end] < target) {
      start++
    } else {
      return [start + 1, end + 1]
    }
  }
}

if (process.env.LZS) { // local test
  const assert = require('assert')
  assert.deepStrictEqual(twoSum([1, 3, 5, 9], 8), [2, 3])
  assert.deepStrictEqual(twoSum([1, 3, 5, 9, 11, 29], 8), [2, 3])
  assert.deepStrictEqual(twoSum([1, 3, 5, 9, 11, 29], 30), [1, 6])
  let arr = Array
    .from({length: 100}, () => Math.floor(Math.random() * 10000))
    .sort((x, y) => x > y ? 1 : -1)
  for (let _ = 0; _ < 10; _++) {
    let a = Math.floor(Math.random() * 10)
    let b = Math.floor(Math.random() * 10)
    if (a > b) {
      [a, b] = [b, a]
    } else if (a === b) {
      continue
    }
    try {
      assert.deepStrictEqual(twoSum(arr, arr[a] + arr[b]), [a + 1, b + 1])
    } catch (e) {
      console.log(arr)
      console.log(a, b, arr[a], arr[b], twoSum(arr, arr[a] + arr[b]))
      break
    }
  }
}
