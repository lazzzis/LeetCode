/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let s = new Set()
  for (let i = 0; i < nums.length; i++) {
    s.add(nums[i])
    if (s.size !== i + 1) {
      return true
    }
  }
  return false
}

if (process.env.LZS) { // local test
  const assert = require('assert')
  assert(containsDuplicate([1, 2, 3, 1]))
  assert(containsDuplicate([1, 2, 3, 1, 3]))
  assert(containsDuplicate([1, 1]))
  assert(!containsDuplicate([1, 2, 3]))
}
