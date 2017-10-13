/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid
  while (left + 1 < right) {
    mid = (left + right) >> 1
    const [ mv, lv, rv ] = [ nums[mid], nums[left], nums[right] ]
    if (mv === target) {
      return mid
    }
    if (lv <= mv) {
      if (lv <= target && target <= mv) {
        right = mid
      } else {
        left = mid
      }
    } else {
      if (mv <= target && target <= rv) {
        left = mid
      } else {
        right = mid
      }
    }
  }
  if (nums[left] === target) {
    return left
  } else if (nums[right] === target) {
    return right
  }
  return -1
};

if (process.env.LZS) {
  console.log(search([4, 5, 6, 7, 0, 1, 2], 4))
  console.log(search([4, 5, 6, 7, 0, 1, 2], 2))
  console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
  console.log(search([4, 5, 6, 7, 0, 1, 2], 6))
  console.log(search([4, 5, 6, 7, 0, 1, 2], -1))
  console.log(search([], -1))
  console.log(search([0, -1, -2, -3], -1))
}
