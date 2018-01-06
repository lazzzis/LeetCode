/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  if (grid == null || grid.length === 0 || grid[0].length === 0) return 0
  const vis = Array.from({ length: grid.length },
    () => Array.from({ length: grid[0].length }, () => false))
  let maxx = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (vis[i][j] || grid[i][j] === 0) continue
      maxx = Math.max(maxx, dfs(i, j))
    }
  }

  return maxx

  function dfs (x, y) {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) return 0
    if (vis[x][y] || grid[x][y] === 0) return 0
    const dirs = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0]
    ]
    let ans = 1
    vis[x][y] = true
    for (const dir of dirs) {
      ans += dfs(x + dir[0], y + dir[1])
    }
    return ans
  }
};
