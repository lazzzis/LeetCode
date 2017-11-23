/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  function dfs (index, cur, res, rmL, rmR, open) {
    if (open < 0 || rmL < 0 || rmR < 0) {
      // rmL < 0 || rmR < 0; too many left or right parentheses are removed
      // open < 0, in a substring, there're too many right parentheses, like '())'
      return
    }
    if (index === s.length) {
      if (open === 0 && rmL === 0 && rmR === 0) {
        res.add(cur)
      }
      return
    }
    const c = s[index]
    if (c === '(') {
      dfs(index + 1, cur, res, rmL - 1, rmR, open)
      dfs(index + 1, cur + c, res, rmL, rmR, open + 1)
    } else if (c === ')') {
      dfs(index + 1, cur, res, rmL, rmR - 1, open)
      dfs(index + 1, cur + c, res, rmL, rmR, open - 1)
    } else {
      dfs(index + 1, cur + c, res, rmL, rmR, open)
    }
  }
  let rmL = 0 // the number of left parentheses that should be removed
  let rmR = 0 // the number of right parentheses that should be removed
  for (const c of s) {
    if (c === '(') {
      rmL++
    } else if (c === ')') {
      if (rmL !== 0) {
        rmL--
      } else {
        rmR++
      }
    }
  }
  const res = new Set()
  dfs(0, '', res, rmL, rmR, 0)
  return [...res]
};

// https://discuss.leetcode.com/topic/30743/easiest-9ms-java-solution
