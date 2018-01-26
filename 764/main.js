/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (N, mines) {
  const zeros = Array.from({length: N},
    () => Array.from({length: N}, () => false))
  for (const mine of mines) {
    zeros[mine[0]][mine[1]] = true
  }
  const nearest = Array.from({length: N},
    () => Array.from({length: N}, () => ({
      top: -1, left: -1, right: N, bottom: N
    })))
  for (let i = 0; i < N; i++) {
    let left = -1
    let top = -1
    for (let j = 0; j < N; j++) {
      if (zeros[i][j]) {
        left = j
      } else {
        nearest[i][j].left = left
      }
      if (zeros[j][i]) {
        top = j
      } else {
        nearest[j][i].top = top
      }
    }
    let right = N
    let bottom = N
    for (let j = N - 1; j >= 0; j--) {
      if (zeros[i][j]) {
        right = j
      } else {
        nearest[i][j].right = right
      }
      if (zeros[j][i]) {
        bottom = j
      } else {
        nearest[j][i].bottom = bottom
      }
    }
  }
  let ans = 0
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (zeros[i][j]) continue
      ans = Math.max(
        ans,
        Math.min(
          j - nearest[i][j].left,
          nearest[i][j].right - j,
          i - nearest[i][j].top,
          nearest[i][j].bottom - i,
        )
      )
    }
  }
  return ans
}
