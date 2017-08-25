/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 0) {
    return -1
  }
  let left = 0
  let right = nums.length - 1
  while (left + 1 < right) {
    const mid = (left + right) >> 1 // Math.floor
    const midv = nums[mid]
    if (midv > nums[mid + 1]) {
      ;[left, right] = [mid, mid + 1]
      break
    } else if (midv > nums[nums.length - 1]) {
      left = mid
    } else { // <
      right = mid
    }
  }
  const binarySearch = function (arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left + 1 < right) {
      const mid = (left + right) >> 1
      const midv = arr[mid]
      if (midv === target) {
        return mid
      } else if (midv < target) {
        left = mid
      } else {
        right = mid
      }
    }
    return arr[left] === target ? left
      : arr[right] === target ? right : -1
  }
  if (nums[0] <= target && target <= nums[left]) {
    return binarySearch(nums.slice(0, left + 1), target)
  } else {
    const res = binarySearch(nums.slice(right), target)
    return res === -1 ? res : res + right
  }
}

if (process.env.LZS) {
  // local test
  const assert = require('chai').assert
  assert.strictEqual(search([4, 5, 6, 7, 0, 1, 2], 4), 0)
  assert.strictEqual(search([4, 5, 6, 7, 0, 1, 2], 6), 2)
  assert.strictEqual(search([4, 5, 6, 7, 0, 1, 2], 1), 5)
  assert.strictEqual(search([4, 5, 6, 7, 0, 1, 2], 2), 6)
  assert.strictEqual(search([4, 5, 6, 7, 0, 1, 2], 8), -1)
  assert.strictEqual(search([2], 2), 0)
  assert.strictEqual(search([1], 2), -1)
  assert.strictEqual(search([], 2), -1)
  assert.strictEqual(search([1, 3, 5, 7, 9], 2), -1)
  assert.strictEqual(search([1, 3, 5, 7, 9], 5), 2)
}
