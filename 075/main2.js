// https://youtu.be/J9DgvL6L1nk?list=PLH8TFsY0qnE2R9kf_9vahNY6pG9601z_4
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
  let first = 0
  let last = nums.length - 1
  while (first < nums.length && nums[first] === 0) first++
  while (last >= 0 && nums[last] === 2) last--
  let index = first
  while (index <= last) {
    if (nums[index] === 0) {
      swap(first, index)
      first++
      index++
    } else if (nums[index] === 2) {
      swap(last, index)
      last--
    } else if (nums[index] === 1) {
      index++
    }
  }
};

let nums = [ 2, 0 ]
sortColors(nums)
console.log(nums)
