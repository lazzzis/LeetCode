/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  function point (val) {
    const [ x, y ] = [ Math.floor(val / matrix[0].length), val % matrix[0].length ]
    return matrix[x][y]
  }
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false
  }
  let left = 0
  let right = matrix.length * matrix[0].length - 1
  while (right - left > 1) {
    const mid = (right + left) >> 1
    const midv = point(mid)
    if (midv > target) {
      right = mid
    } else if (midv < target) {
      left = mid
    } else {
      return true
    }
  }
  return point(left) === target || point(right) === target
};

if (process.env.LZS) {
  const assert = require('chai').assert
  let matrix = [[1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]]
  assert.isTrue(searchMatrix(matrix, 1))
  assert.isTrue(searchMatrix(matrix, 3))
  assert.isTrue(searchMatrix(matrix, 7))
  assert.isTrue(searchMatrix(matrix, 11))
  assert.isTrue(searchMatrix(matrix, 20))
  assert.isTrue(searchMatrix(matrix, 23))
  assert.isTrue(searchMatrix(matrix, 30))
  assert.isTrue(searchMatrix(matrix, 50))

  assert.isFalse(searchMatrix([[]], 1))
  assert.isTrue(searchMatrix([[1]], 1))
  assert.isFalse(searchMatrix([[1]], 2))
}
