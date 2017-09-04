/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let used = {}
  for (let i = 0; i < 9; i++) {
    used = {}
    // fixed row
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.' && board[i][j] in used) {
        return false
      } else {
        used[board[i][j]] = 1
      }
    }
    // fixed col
    used = {}
    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== '.' && board[j][i] in used) {
        return false
      } else {
        used[board[j][i]] = 1
      }
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      used = {}
      for (let k = i * 3; k < 3 * (i + 1); k++) {
        for (let l = j * 3; l < 3 * (j + 1); l++) {
          if (board[k][l] !== '.' && board[k][l] in used) {
            return false
          } else {
            used[board[k][l]] = 1
          }
        }
      }
    }
  }
  return true
}
