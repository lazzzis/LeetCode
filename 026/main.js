/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  let point = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[point++] = nums[i]
    }
  }
  nums.splice(point)
  return nums.length
}

let nums = [1, 2, 2, 3, 3]
console.log(removeDuplicates(nums))
console.log(nums)
