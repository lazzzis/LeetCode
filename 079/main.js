/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const vis = new Array(board.length)
  for (let i = 0; i < board.length; i++) {
    vis[i] = new Array(board[0].length).fill(false)
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      vis[i][j] = true
      if (board[i][j] === word[0] && dfs(board, word, i, j, vis)) {
        return true
      }
      vis[i][j] = false
    }
  }
  return false
};

function inside (board, x, y) {
  return x >= 0 && y >= 0 && x < board.length && y < board[0].length
}

function dfs (board, word, x, y, vis) {
  const dirs = [
    [1, 0], [0, 1], [-1, 0], [0, -1]
  ]
  function dfsHelper (x, y, index) {
    if (index + 1 === word.length) {
      return true
    }
    for (const d of dirs) {
      let newx = x + d[0]
      let newy = y + d[1]
      if (inside(board, newx, newy) &&
      board[newx][newy] === word[index + 1] &&
      !vis[newx][newy]) {
        vis[newx][newy] = true
        if (dfsHelper(newx, newy, index + 1)) {
          return true
        }
        vis[newx][newy] = false
      }
    }
    return false
  }
  return dfsHelper(x, y, 0)
}

if (process.env.LZS) {
  console.log(exist(
    [['C', 'D', 'E', 'F'],
    ['E', 'R', 'T', 'F']]
  , 'CDETFF'))
}
