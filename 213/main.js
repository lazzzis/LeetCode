/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  const dpFh = Array.from(nums, () => new Array(2).fill(0))
  const dpNfh = Array.from(nums, () => new Array(2).fill(0))
  dpFh[0][1] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    const item = nums[i]
    dpFh[i][1] = dpFh[i - 1][0] + item
    dpFh[i][0] = Math.max(dpFh[i - 1][0], dpFh[i - 1][1])
    dpNfh[i][1] = dpNfh[i - 1][0] + item
    dpNfh[i][0] = Math.max(dpNfh[i - 1][0], dpNfh[i - 1][1])
  }
  const last = nums.length - 1
  return Math.max(
    dpFh[last][0],
    dpNfh[last][0],
    dpNfh[last][1]
  )
};

console.log(rob([1, 2]))
