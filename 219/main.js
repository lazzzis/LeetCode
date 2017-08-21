/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = {}
  for (const [index, item] of nums.entries()) {
    if (map[item] != null && index - map[item] <= k) {
      return true
    }
    map[item] = index
  }
  return false
}

if (process.env.LZS) {
  const assert = require('chai').assert
  assert(containsNearbyDuplicate([1, 2, 1, 2], 2))
  assert(containsNearbyDuplicate([1, 2, 3, 4, 1], 4))
  assert(containsNearbyDuplicate([1, 1], 1))
  assert.isFalse(containsNearbyDuplicate([1, 2, 3, 4, 1], 3))
  assert.isFalse(containsNearbyDuplicate([1, 2, 3, 4, 1], 0))
  assert.isFalse(containsNearbyDuplicate([1], 1))
}
