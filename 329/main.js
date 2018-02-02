/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  function helper (x, y) {
    if (vis[x][y]) {
      return dp[x][y]
    }
    vis[x][y] = true
    let ans = 0
    const dirs = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ]
    for (const dir of dirs) {
      const nx = x + dir[0]
      const ny = y + dir[1]
      const elt = matrix[x][y]
      if (isInside(nx, ny) && matrix[nx][ny] < elt) {
        ans = Math.max(ans, helper(nx, ny))
      }
    }
    dp[x][y] = ans + 1
    return ans + 1
  }
  function isInside (x, y) {
    return x >= 0 && y >= 0 && x < matrix.length && y < matrix[x].length
  }
  if (matrix == null || matrix.length === 0 || matrix[0].length === 0) return 0
  const dp = Array.from(matrix, () => Array.from(matrix[0], () => 1))
  const vis = Array.from(matrix, () => Array.from(matrix[0], () => false))
  let ans = 1
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      ans = Math.max(ans, helper(i, j))
    }
  }
  return ans
}
