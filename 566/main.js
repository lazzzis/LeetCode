/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  if (r * c !== nums.length * nums[0].length) {
    return nums
  }
  let ans = []
  let cnt = 0
  let row = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      cnt++
      if (cnt === c + 1) {
        ans.push(row)
        row = []
        cnt = 1
      }
      let item = nums[i][j]
      row.push(item)
    }
  }
  ans.push(row)
  return ans
}

if (process.env.LZS) { // local test
  const assert = require('assert')
  assert.deepStrictEqual(matrixReshape([[1, 2], [3, 4]], 1, 4), [[1, 2, 3, 4]])
  assert.deepStrictEqual(matrixReshape([[1, 2], [3, 4]], 4, 1), [[1], [2], [3], [4]])
  assert.deepStrictEqual(matrixReshape([[1, 2], [3, 4]], 4, 2), [[1, 2], [3, 4]])
  assert.deepStrictEqual(matrixReshape([[1]], 1, 1), [[1]])
}
