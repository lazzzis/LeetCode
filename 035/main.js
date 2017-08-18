/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let ans = nums.length
  nums.some((item, i) => {
    if (item >= target) {
      ans = i
      return true
    }
  })
  return ans
}

if (process.env.LZS) { // local test
  const assert = require('assert')
  assert(searchInsert([1, 3, 5, 6], 5) === 2)
  assert(searchInsert([1, 3, 5, 6], 2) === 1)
  assert(searchInsert([1, 3, 5, 6], 7) === 4)
  assert(searchInsert([1, 3, 5, 6], 0) === 0)
}
