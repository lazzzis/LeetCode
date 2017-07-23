/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = nums[0] >= 0 ? nums[0] : 0
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, nums[i])
    if (sum + nums[i] >= 0) {
      sum += nums[i]
      max = Math.max(max, sum)
    } else {
      sum = 0
    }
  }
  return max
};

if (require.main === module) {
  const assert = require('assert')
  assert.deepEqual(maxSubArray([1, 2, 3]), 6)
  assert.deepEqual(maxSubArray([10, 2, 3]), 15)
  assert.deepEqual(maxSubArray([-1, -1, -2]), -1)
  assert.deepEqual(maxSubArray([-1, 2, -1, -2]), 2)
  assert.deepEqual(maxSubArray([-1, 2, -1, 2, 10, -2]), 13)
  assert.deepEqual(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6)
}
