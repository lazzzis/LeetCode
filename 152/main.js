/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let minCur = nums[0]
  let maxCur = nums[0]
  let product = nums[0]
  for (const item of nums.slice(1)) {
    const nextMin = minCur * item
    const nextMax = maxCur * item
    maxCur = Math.max(nextMax, nextMin, item)
    minCur = Math.min(nextMin, nextMax, item)
    product = Math.max(maxCur, minCur, product)
  }
  return product
};

if (process.env.LZS) {
  const assert = require('chai').assert
  // console.log(maxProduct([2,-5,-2,-4,3]))
  assert.strictEqual(maxProduct([-2]), -2)
  assert.strictEqual(maxProduct([-2, -2]), 4, [-2, -2])
  assert.strictEqual(maxProduct([-2, -2, -2]), 4, [-2, -2, -2])
  assert.strictEqual(maxProduct([-2, 1, 2, -2]), 8)
  assert.strictEqual(maxProduct([-2, 1, 2, -2, -2]), 8)
  assert.strictEqual(maxProduct([0, -2]), 0)
  assert.strictEqual(maxProduct([0, 2]), 2)
}
