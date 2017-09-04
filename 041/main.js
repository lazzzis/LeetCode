/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  for (const [index, val] of nums.entries()) {
    if (val <= 0) {
      nums[index] = Infinity
    }
  }
  for (let val of nums) {
    val = Math.abs(val)
    if (val - 1 >= nums.length) {
      continue
    } else if (nums[val - 1] < 0) {
      continue
    } else {
      nums[val - 1] = -nums[val - 1]
    }
  }
  for (const [index, val] of nums.entries()) {
    if (val > 0) {
      return index + 1
    }
  }
  return nums.length + 1
}

if (process.env.LZS) {
  const assert = require('chai').assert
  assert.strictEqual(firstMissingPositive([1, 12, 5, -8, 0]), 2)
  assert.strictEqual(firstMissingPositive([-9, 18, 19, 14, 2, -7, 2, 16, 6, 17]), 1)
  assert.strictEqual(firstMissingPositive([-10, -2, 20, 1, 15]), 2)
  assert.strictEqual(firstMissingPositive([2, 1]), 3)
}
