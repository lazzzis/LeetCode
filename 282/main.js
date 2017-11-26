/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
  function dfs (path, lastNum, index, tempRes) {
    if (index === num.length) {
      if (tempRes === target) {
        ans.push(path)
      }
      return
    }
    const len = (num[index] === '0' ? index + 1 : num.length)
    let n = 0
    for (let i = index; i < len; i++) {
      n = n * 10 + (+num[i])
      dfs(path + '+' + n, n, i + 1, tempRes + n)
      dfs(path + '-' + n, -n, i + 1, tempRes - n)
      dfs(path + '*' + n, lastNum * n, i + 1, tempRes + lastNum * n - lastNum)
    }
  }
  const ans = []
  const len = (num[0] === '0' ? 1 : num.length)
  let n = 0
  for (let i = 0; i < len; i++) {
    n = n * 10 + (+num[i])
    dfs('' + n, n, i + 1, n)
  }
  return ans
};

if (process.env.LZS) {
  console.log(addOperators('105', 5))
  console.log(addOperators('232', 8))
  console.log(addOperators('123', 6))
  console.log(addOperators('000', 0))
  console.log(addOperators('00', 0))
  console.log(addOperators('2341', 23))
  console.log(addOperators('3456237490', 9191))
  console.log(addOperators('153780712387', 9191))
}
