/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function (S) {
  function helper (x, arr) {
    if (x >= S.length) return true
    const sum = arr[arr.length - 1] + arr[arr.length - 2]
    const len = new String(sum).length
    // transform to string, instead of num
    // '12' === '0012'
    // 12 === 12
    if ((sum + '') === S.slice(x, x + len) && sum <= MAX) {
      arr.push(sum)
      return helper(x + len, arr)
    }
    return false
  }
  const MAX = 2 ** 31 - 1
  for (let i = 0; i < S.length - 1; i++) {
    for (let j = i + 1; j < S.length - 1; j++) {
      if (S[0] === '0' && i > 0) {
        break
      }
      if (S[i + 1] === '0' && j > i + 1) {
        break
      }
      const a = parseInt(S.slice(0, i + 1), 10)
      const b = parseInt(S.slice(i + 1, j + 1), 10)
      if (a >= MAX || b >= MAX) {
        break
      }
      const arr = [a, b]
      if (helper(j + 1, arr)) {
        return arr
      }
    }
  }
  return []
}
