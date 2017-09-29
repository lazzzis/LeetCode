/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const rows = grid.length
  const cols = grid[0].length
  const sum = Array.from({ length: rows }, () => {
    return Array.from({ length: cols }, () => true)
  })
  sum[0][0] = grid[0][0]
  for (let i = 1; i < cols; i++) {
    sum[0][i] = sum[0][i - 1] + grid[0][i]
  }
  for (let i = 1; i < rows; i++) {
    sum[i][0] = sum[i - 1][0] + grid[i][0]
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      sum[i][j] = Math.min(sum[i - 1][j], sum[i][j - 1]) + grid[i][j]
    }
  }
  return sum[rows - 1][cols - 1]
};

console.log(minPathSum([[1, 3, 2], [2, 1, 3], [4, 9, 0]]))
