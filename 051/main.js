/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const grids = Array.from({ length: n }, () => {
    return Array.from({ length: n }, () => '.')
  })

  const ans = []

  function isConflicted (x, y) {
    for (let i = 0; i < x; i++) {
      if (grids[i][y] === 'Q') {
        return true
      }
    }
    let i = x - 1
    let j = y - 1
    while (i >= 0 && j >= 0) {
      if (grids[i--][j--] === 'Q') {
        return true
      }
    }
    i = x - 1
    j = y + 1
    while (i >= 0 && j < n) {
      if (grids[i--][j++] === 'Q') {
        return true
      }
    }
    return false
  }

  function mirror (grids) {
    return grids.map((item) => item.slice().reverse())
  }

  function fillGrids (x, callback) {
    if (x >= n) {
      return callback(grids)
    }
    for (let i = 0; i < n; i++) {
      if (!isConflicted(x, i)) {
        grids[x][i] = 'Q'
        fillGrids(x + 1, callback)
        grids[x][i] = '.'
      }
    }
  }

  for (let i = 0; i < Math.floor(n / 2); i++) {
    grids[0][i] = 'Q'
    fillGrids(1, (grids) => {
      ans.push(grids.map(item => item.slice()), mirror(grids))
    })
    grids[0][i] = '.'
  }
  if (n % 2 === 1) {
    grids[0][Math.floor(n / 2)] = 'Q'
    fillGrids(1, (grids) => {
      ans.push(grids.map(item => item.slice()))
    })
    grids[0][Math.floor(n / 2)] = '.'
  }

  return ans.map((grids) => {
    return grids.map(row => row.join(''))
  })
};

console.log(solveNQueens(6))
