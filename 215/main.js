// https://www.youtube.com/watch?v=ow04KXJ0kG4
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  function helper (left, right, target) {
    if (right === left) return nums[left]
    const mid = (left + right) >> 1
    const mv = nums[mid]
    ;[nums[left], nums[mid]] = [nums[mid], nums[left]]
    let l = left + 1
    let r = right
    while (l < r) {
      const lv = nums[l]
      const rv = nums[r]
      if (lv <= mv) {
        if (rv > mv) {
          l++
          r--
        } else {
          l++
        }
      } else { // lv > mv
        if (rv <= mv) {
          ;[nums[l], nums[r]] = [nums[r], nums[l]]
          l++
          r--
        } else {
          r--
        }
      }
    }
    if (nums[l] > nums[left]) {
      l--
    }
    ;[nums[l], nums[left]] = [nums[left], nums[l]]
    if (l === target) {
      return nums[l]
    }
    if (target > l) {
      return helper(l + 1, right, target)
    } else {
      return helper(left, l - 1, target)
    }
  }
  return helper(0, nums.length - 1, nums.length - k)
}

console.log(findKthLargest([3, 2], 1))
