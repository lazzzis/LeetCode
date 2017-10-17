/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let slow = 2
  let fast = 2
  while (fast < nums.length) {
    if (!(nums[slow - 1] === nums[slow - 2] && nums[fast] === nums[slow - 1])) {
      nums[slow++] = nums[fast]
    }
    fast++
  }
  return Math.min(slow, nums.length)
};
