/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (target < nums[0] || target > nums[nums.length - 1]) {
    return [-1, -1]
  }
  if (nums.length === 1) {
    return nums[0] === target ? [0, 0] : [-1, -1]
  }
  let left = 0
  let right = nums.length - 1
  let ansl = -1
  let ansr = -1
  while (left < right) {
    const mid = (left + right) >> 1 // Math.floor
    const midv = nums[mid]
    if (right - left === 1) {
      if (nums[right] > target && nums[left] < target) {
        return [-1, -1]
      } else if (nums[right] === target && nums[left] < target) {
        ansl = right
        break
      }
    }
    if (midv === target) {
      if (mid === 0 || nums[mid - 1] < target) {
        ansl = mid
        break
      }
      right = mid
    } else if (midv < target) {
      left = mid
    } else {
      right = mid
    }
  }
  left = 0
  right = nums.length - 1
  while (left < right) {
    const mid = Math.ceil((left + right) / 2)
    const midv = nums[mid]
    if (right - left === 1) {
      if (nums[right] > target && nums[left] < target) {
        return [-1, -1]
      } else if (nums[left] === target && nums[right] > target) {
        ansr = left
        break
      }
    }
    if (midv === target) {
      if (mid === nums.length - 1 || nums[mid + 1] > target) {
        ansr = mid
        break
      }
      left = mid
    } else if (midv < target) {
      left = mid
    } else {
      right = mid
    }
  }
  return [ansl, ansr]
}

if (process.env.LZS) {
  const assert = require('chai').assert
  const Chance = require('chance')
  const chance = new Chance()
  const brute = function (nums, target) {
    return [nums.indexOf(target), nums.lastIndexOf(target)]
  }
  assert.deepEqual(searchRange([1], 1), brute([1], 1), [1])
  assert.deepEqual(searchRange([], 1), brute([], 1), [])
  for (let _ = 0; _ < 500; _++) {
    const nums = Array.from({
      length: chance.integer({ min: 5, max: 150 })
    }, () => chance.integer({ min: -100, max: 100 })).sort((x, y) => x < y ? -1 : 1)
    const target = chance.integer({ min: -100, max: 100 })
    assert.deepEqual(searchRange(nums, target), brute(nums, target))
  }
}
