/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) {
    return []
  }
  const ans = []
  let left = 0
  let right = matrix[0].length - 1
  let top = 0
  let bottom = matrix.length - 1

  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) ans.push(matrix[top][i])
    for (let i = top; i < bottom; i++) ans.push(matrix[i][right])
    for (let i = right; i > left; i--) ans.push(matrix[bottom][i])
    for (let i = bottom; i > top; i--) ans.push(matrix[i][left])

    left++
    top++
    right--
    bottom--
  }

  if (left === right) {
    for (let i = top; i <= bottom; i++) ans.push(matrix[i][left])
  } else if (top === bottom) {
    for (let i = left; i <= right; i++) ans.push(matrix[top][i])
  }

  return ans
};

if (process.env.LZS) {
  console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
  console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))
  console.log(spiralOrder([[]]))
  console.log(spiralOrder([]))
}
