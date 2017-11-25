/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
  const lefts = new Array(nums.length)
  const rights = new Array(nums.length)
  const sumOfSubArr = new Array(nums.length).fill(0)

  for (let i = 0; i < k; i++) {
    sumOfSubArr[0] += nums[i]
  }
  for (let i = 1; i <= nums.length - k; i++) {
    sumOfSubArr[i] = sumOfSubArr[i - 1] + nums[i + k - 1] - nums[i - 1]
  }

  let maxSumOfSubArr = 0
  let idOfMaxSumOfSubAtt = 0
  for (let i = 0; i <= nums.length - k; i++) {
    if (maxSumOfSubArr < sumOfSubArr[i]) {
      maxSumOfSubArr = sumOfSubArr[i]
      idOfMaxSumOfSubAtt = i
    }
    lefts[i] = idOfMaxSumOfSubAtt
  }

  idOfMaxSumOfSubAtt = nums.length - k
  maxSumOfSubArr = 0
  for (let i = nums.length - k; i >= 0; i--) {
    if (maxSumOfSubArr <= sumOfSubArr[i]) {
      maxSumOfSubArr = sumOfSubArr[i]
      idOfMaxSumOfSubAtt = i
    }
    rights[i] = idOfMaxSumOfSubAtt
  }

  maxSumOfSubArr = 0
  let ans = new Array(3)
  for (let i = k; i <= nums.length - 2 * k; i++) {
    const leftId = lefts[i - k]
    const rightId = rights[i + k]
    if (maxSumOfSubArr <= sumOfSubArr[leftId] + sumOfSubArr[i] + sumOfSubArr[rightId]) {
      maxSumOfSubArr = sumOfSubArr[leftId] + sumOfSubArr[i] + sumOfSubArr[rightId]
      ans = [leftId, i, rightId]
    }
  }
  return ans
};

if (process.env.LZS) {
  const assert = require('chai').assert
  assert.deepStrictEqual(maxSumOfThreeSubarrays([1,2,1,2,6,7,5,1], 2), [0, 3, 5])
  assert.deepStrictEqual(maxSumOfThreeSubarrays([4, 5, 10, 6, 11, 17, 4, 11, 1, 3], 1), [4, 5, 7])
  assert.deepStrictEqual(maxSumOfThreeSubarrays([7,13,20,19,19,2,10,1,1,19], 3), [1, 4, 7])
}
