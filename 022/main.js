/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const ans = []
  function dfs (acc, left) {
    if (acc.length === 2 * n) {
      if (left === 0) {
        ans.push(acc)
      }
      return
    }
    if (2 * n - acc.length < left) { // no enough right parentnesss left
      return
    }
    dfs(acc + '(', left + 1)
    if (left) {
      dfs(acc + ')', left - 1)
    }
  }
  dfs('', 0)
  return ans
}

if (process.env.LZS) { // local test
  console.log(generateParenthesis(5))
}
