/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
var largestOverlap = function (A, B) {
  function cnt (A, B) {
    let ans = 0
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (A[i][j] === B[i][j] && A[i][j] === 1) {
          ans += 1
        }
      }
    }
    return ans
  }

  function move (A, x, y) {
    const next = Array.from(A, (_, i) => A[i].slice().fill(0))
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const nx = x + i
        const ny = y + j
        if (nx >= rows || ny >= cols) {
          continue
        }
        next[nx][ny] = A[i][j]
      }
    }
    return next
  }

  const rows = A.length
  const cols = A[0].length
  let ans = 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      ans = Math.max(ans, cnt(move(A, i, j), B))
      ans = Math.max(ans, cnt(move(B, i, j), A))
    }
  }
  return ans
}
