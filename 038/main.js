/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let ans = '1'
  for (let i = 1; i < n; i += 1) {
    let cnt = 1
    let ch = ans[0]
    let res = ''
    for (let j = 1; j < ans.length; j += 1) {
      if (ans[j] !== ch) {
        res = res + cnt + ch
        cnt = 1
        ch = ans[j]
      } else {
        cnt += 1
      }
    }
    res = res + cnt + ch
    ans = res
  }
  return ans
}

if (process.env.LZS) { // local test
  const assert = require('assert')
  assert.strictEqual(countAndSay(5), '111221')
}
