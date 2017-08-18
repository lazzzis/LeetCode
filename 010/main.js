/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const dp = Array.from({ length: s.length + 1 }, () => {
    return Array.from({ length: p.length + 1 })
  })
  dp[0][0] = true
  for (let i = 0; i < p.length; i++) {
    if (p[i] === '*') {
      dp[0][i + 1] = dp[0][i - 1]
    } else {
      dp[0][i + 1] = false
    }
  }
  for (let i = 1; i <= s.length; i++) {
    dp[i][0] = false
  }

  for (let si = 1; si <= s.length; si++) {
    for (let pi = 1; pi <= p.length; pi++) {
      const pitem = p[pi - 1]
      const sitem = s[si - 1]

      if (pitem === '.' || pitem === sitem) {
        dp[si][pi] = dp[si - 1][pi - 1]
      } else if (pitem === '*') {
        dp[si][pi] = dp[si][pi - 2]
        if (!dp[si][pi] && (sitem === p[pi - 2] || p[pi - 2] === '.')) {
          dp[si][pi] = dp[si - 1][pi]
        }
      } else {
        dp[si][pi] = false
      }
    }
  }
  // console.log(dp)
  return dp[s.length][p.length]
}

if (process.env.LZS) {
  const assert = require('assert')
  assert(isMatch('aa', 'a') === false)
  assert(isMatch('aa', 'a.'))
  assert(isMatch('aa', 'a*'))
  assert(isMatch('aa', 'a.'))
  assert(isMatch('ab', 'a.*'))
  assert(isMatch('', '.*'))
  assert(isMatch('aab', 'c*a*b'))
  assert(isMatch('ab', 'abb') === false)
  assert(isMatch('aaa', 'ab*ac*a'))
}
