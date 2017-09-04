/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const steps = {}
  let reach = 0
  steps[0] = 0

  for (let index = 0; index < nums.length; index++) {
    const item = nums[index]
    const step = steps[index]
    const start = reach + 1
    const end = Math.min(nums.length, index + item + 1)
    for (let i = start; i < end; i++) {
      steps[i] = step + 1
    }
    reach = Math.max(reach, index + item)
    if (end >= nums.length) {
      break
    }
  }

  return steps[nums.length - 1]
}

if (process.env.LZS) {
  // local test
  console.log(jump([3, 1, 2, 4]))
  console.log(jump([3, 1, 2, 5, 4]))
  console.log(jump([3]))
}
