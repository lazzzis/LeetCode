/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length <= 1) return 0
  let step = 0
  let curMax = 0
  let nextMax = 0
  let i = 0
  while (i < nums.length) {
    curMax = nextMax
    while (i < nums.length && i <= curMax) {
      nextMax = Math.max(nextMax, i + nums[i])
      i++
    }
    step++
    curMax = nextMax
    if (curMax >= nums.length - 1) return step
  }
  return step
};
