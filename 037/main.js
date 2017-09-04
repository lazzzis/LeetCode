/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  // transform chars to nums
  const numsBoard = board.map(
    row => row
      .map(item => item === '.' ? -1 : item.charCodeAt(0) - '0'.charCodeAt(0)))

  const unfilled = []
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (numsBoard[i][j] === -1) {
        unfilled.push([ i, j ])
      }
    }
  }

  let flag = false
  dfs(0)

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      board[i][j] = String.fromCharCode('0'.charCodeAt(0) + numsBoard[i][j])
    }
  }

  function posibleNum (row, col) {
    let usedDigits = new Set()
    numsBoard[row].forEach(item => usedDigits.add(item))
    for (let i = 0; i < 9; i++) {
      usedDigits.add(numsBoard[i][col])
    }
    let rn = Math.floor(row / 3) * 3
    let cn = Math.floor(col / 3) * 3
    for (let i = rn; i < rn + 3; i++) {
      for (let j = cn; j < cn + 3; j++) {
        usedDigits.add(numsBoard[i][j])
      }
    }
    return Array
      .from({ length: 9 }, (_, i) => i + 1)
      .filter(item => !usedDigits.has(item))
  }

  function dfs (cur) {
    if (flag) return
    if (cur >= unfilled.length) {
      flag = true
      return
    }
    const [row, col] = unfilled[cur]
    const nums = posibleNum(row, col)
    for (const item of nums) {
      numsBoard[row][col] = item
      dfs(cur + 1)
      if (flag) return
    }
    numsBoard[row][col] = -1
  }
}

if (process.env.LZS) {
  const test = [ [ '.', '.', '9', '7', '.', '.', '.', '.', '.' ],
    [ '.', '.', '.', '.', '.', '.', '.', '.', '.' ],
    [ '.', '2', '.', '1', '.', '.', '.', '.', '.' ],
    [ '.', '.', '7', '.', '.', '.', '2', '4', '.' ],
    [ '.', '6', '4', '.', '1', '.', '.', '.', '.' ],
    [ '.', '9', '8', '.', '.', '.', '3', '.', '.' ],
    [ '.', '.', '.', '8', '.', '3', '.', '2', '.' ],
    [ '.', '.', '.', '.', '.', '.', '.', '.', '6' ],
    [ '.', '.', '.', '2', '7', '5', '9', '.', '.' ] ]
  solveSudoku(test)
  console.log(test)
}
