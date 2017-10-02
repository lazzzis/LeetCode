/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  function swap (i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  let fast = 0
  let slow = 0
  for (let i = 0; i < 3; i++) {
    fast = slow
    while (fast < nums.length) {
      if (nums[fast] === i) {
        swap(fast, slow)
      }
      if (nums[slow] === i) {
        slow++
      }
      fast++
    }
  }
};

const nums = [1, 1, 1, 1, 0]
sortColors(nums)
console.log(nums)
