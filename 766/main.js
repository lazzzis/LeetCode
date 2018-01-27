/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  function inside (x, y) {
    return x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length
  }
  if (matrix == null || matrix.length === 0 || matrix[0].length === 0) return true
  for (let i = 0; i < matrix[0].length; i++) {
    const elt = matrix[0][i]
    let x = 1
    let y = i + 1
    while (inside(x, y)) {
      if (elt !== matrix[x][y]) return false
      x++
      y++
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    const elt = matrix[i][0]
    let x = i + 1
    let y = 1
    while (inside(x, y)) {
      if (elt !== matrix[x][y]) return false
      x++
      y++
    }
  }
  return true
}
