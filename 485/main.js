/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let i = 0
  let maxx = 0
  while (i < nums.length) {
    if (nums[i] === 1) {
      const start = i
      while (i < nums.length && nums[i] === 1) {
        i++
      }
      maxx = Math.max(i - start, maxx)
    }
    i++
  }
  return maxx
};
