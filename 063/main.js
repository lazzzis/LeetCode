Object.defineProperty(Array.prototype, 'back', { // eslint-disable-line
  get: function () {
    return this[this.length - 1]
  },
  set: function (val) {
    this[this.length - 1] = val
    return val
  }
})

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] || obstacleGrid.back.back) {
    return 0
  }
  const res = Array.from({ length: obstacleGrid.length }, () => {
    return Array.from({ length: obstacleGrid[0].length }, () => 0)
  })
  const rows = obstacleGrid.length
  const cols = obstacleGrid[0].length
  for (let i = 0; i < rows; i++) {
    if (obstacleGrid[i][0]) {
      break
    }
    res[i][0] = 1
  }
  for (let j = 0; j < cols; j++) {
    if (obstacleGrid[0][j]) {
      break
    }
    res[0][j] = 1
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      res[i][j] = 0
      if (obstacleGrid[i - 1][j] !== 1) {
        res[i][j] += res[i - 1][j]
      }
      if (obstacleGrid[i][j - 1] !== 1) {
        res[i][j] += res[i][j - 1]
      }
    }
  }
  return res[rows - 1][cols - 1]
};

console.log(uniquePathsWithObstacles([[0, 0]]))
