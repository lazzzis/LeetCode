/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  function helper (x, y) {
    const set = new Set()
    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        if (grid[i][j] < 1 || grid[i][j] > 9 || set.has(grid[i][j])) {
          return false
        }
        set.add(grid[i][j])
      }
    }
    for (let i = 0; i < 3; i++) {
      let tempSum = grid[x + i][y] + grid[x + i][y + 1] + grid[x + i][y + 2]
      if (tempSum !== 15) return false
    }

    // for cols
    for (let i = 0; i < 3; i++) {
      let tempSum = grid[x][y + i] + grid[x + 1][y + i] + grid[x + 2][y + i]
      if (tempSum !== 15) return false
    }

    // diagonals
    if (grid[x][y] + grid[x + 1][y + 1] + grid[x + 2][y + 2] !== 15) {
      return false
    }
    if (grid[x][y + 2] + grid[x + 1][y + 1] + grid[x + 2][y] !== 15) {
      return false
    }
    return true
  }

  let cnt = 0
  for (let i = 0; i <= grid.length - 3; i++) {
    for (let j = 0; j <= grid[i].length - 3; j++) {
      if (helper(i, j)) cnt++
    }
  }
  return cnt
}
