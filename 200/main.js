/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  function paint (grid, x, y) {
    if (!(x >= 0 && x < grid.length && y >= 0 && y < grid[x].length)) return
    if (grid[x][y] === '0') return
    grid[x][y] = '0'
    paint(grid, x + 1, y)
    paint(grid, x - 1, y)
    paint(grid, x, y + 1)
    paint(grid, x, y - 1)
  }
  if (grid == null || grid.length === 0) return 0
  let cnt = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        cnt++
        paint(grid, i, j)
      }
    }
  }
  return cnt
};
