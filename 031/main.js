/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let replace = nums.length - 2
  while (replace >= 0 && nums[replace] >= nums[replace + 1]) {
    replace--
  }
  if (replace < 0) {
    nums.sort((x, y) => x - y)
    return
  }
  let lgIdx = replace
  while (lgIdx < nums.length - 1 && nums[lgIdx + 1] > nums[replace]) {
    lgIdx++
  }
  ;[nums[replace], nums[lgIdx]] = [nums[lgIdx], nums[replace]]
  nums.splice(replace + 1,
    nums.length - replace,
    ...nums.slice(replace + 1).sort((x, y) => x - y))
  return
}

if (process.env.LZS) {
  // local test
  let nums = [1, 5, 1]
  nextPermutation(nums)
  console.log(nums)
}
