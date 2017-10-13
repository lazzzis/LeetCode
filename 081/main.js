/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid
  while (left + 1 < right) {
    mid = (left + right) >> 1
    const [ mv, lv, rv ] = [ nums[mid], nums[left], nums[right] ]
    if (mv === target) {
      return true
    }
    if (lv < mv) {
      if (lv <= target && target <= mv) {
        right = mid
      } else {
        left = mid
      }
    } else if (lv > mv) {
      if (mv <= target && target <= rv) {
        left = mid
      } else {
        right = mid
      }
    } else {
      left++
    }
  }
  if (nums[left] === target || nums[right] === target) {
    return true
  }
  return false
};

if (process.env.LZS) {
  console.log(search([1, 4, 4, 4, 5], 4))
}
