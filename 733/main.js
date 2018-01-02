/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  function inside (x, y) {
    return x >= 0 && x < image.length && y >= 0 && y < image[0].length
  }
  function dfs (x, y, oldColor) {
    if (vis.has(x + ':' + y)) return
    if (!inside(x, y)) return
    if (image[x][y] !== oldColor) return
    vis.add(x + ':' + y)
    image[x][y] = newColor
    const dirs = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0]
    ]
    for (const dir of dirs) {
      const newX = x + dir[0]
      const newY = y + dir[1]
      dfs(newX, newY, oldColor)
    }
  }
  const vis = new Set()
  const oldColor = image[sr][sc]
  dfs(sr, sc, oldColor)
  return image
};
