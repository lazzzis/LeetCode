/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  if (nums == null || nums.length === 0) return 0
  let sum = (0 + nums.length) * (nums.length + 1) / 2
  nums.forEach(item => { sum -= item })
  return sum
};
