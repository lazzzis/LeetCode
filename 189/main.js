/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k > nums.length) {
    k = k % nums.length
  }
  let length = nums.length
  nums.splice(nums.length, 0, ...nums.slice(0, nums.length - k))
  nums.splice(0, length - k)
}

if (process.env.LZS) { // local test
  let arr = [1, 2, 3, 4, 5, 6, 7]
  rotate(arr, 3)
  console.log(arr)
}
