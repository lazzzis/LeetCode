/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const ans = Array.from({ length: n }, () => Array.from({ length: n }))
  let left = 0
  let right = n - 1
  let top = 0
  let bottom = n - 1
  let cnt = 0

  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) ans[top][i] = (++cnt)
    for (let i = top; i < bottom; i++) ans[i][right] = (++cnt)
    for (let i = right; i > left; i--) ans[bottom][i] = (++cnt)
    for (let i = bottom; i > top; i--) ans[i][left] = (++cnt)

    left++
    top++
    right--
    bottom--
  }

  if (left === right) {
    for (let i = top; i <= bottom; i++) ans[i][left] = (++cnt)
  } else if (top === bottom) {
    for (let i = left; i <= right; i++) ans[top][i] = (++cnt)
  }

  return ans
};

if (process.env.LZS) {
  console.log(generateMatrix(3))
}
