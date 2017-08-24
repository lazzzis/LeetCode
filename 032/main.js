/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let ans = 0
  const vis = []
  const stack = []
  for (let i = 0; i < s.length; i++) {
    vis.push(0)
    const item = s[i]
    // number less than 0 represents '('
    // number greater than or equal to 0 represents the index of the previous '('
    if (item === ')' && stack.length && stack[stack.length - 1] >= 0) {
      const left = stack.pop()
      if (left === 0) {
        vis[i] = i - left + 1
      } else {
        vis[i] = vis[left - 1] + i - left + 1
      }
      ans = Math.max(ans, vis[i])
    } else {
      stack.push(item === '(' ? i : -1)
    }
  }
  return ans
}

if (process.env.LZS) {
  // local test
  const assert = require('chai').assert
  const Chance = require('chance')
  const chance = new Chance()
  const brute = function (s) {
    let maxx = 0
    const valid = function (s) {
      const stack = []
      for (const item of s) {
        if (item === '(') {
          stack.push(item)
        } else { // ')'
          if (stack.length === 0 || stack[stack.length - 1] !== '(') {
            return false
          }
          stack.pop()
        }
      }
      return stack.length === 0
    }
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j < s.length; j++) {
        let substr = s.slice(i, j + 1)
        if (valid(substr)) {
          maxx = Math.max(maxx, substr.length)
        }
      }
    }
    return maxx
  }
  assert.strictEqual(longestValidParentheses(''), 0, 'empty string')
  assert.strictEqual(longestValidParentheses('(('), 0, '((')
  assert.strictEqual(longestValidParentheses('(()'), 2, '(()')
  assert.strictEqual(longestValidParentheses('(())'), 4, '(())')
  for (let _ = 0; _ < 100; _++) {
    const len = chance.integer({ min: 1, max: 200 })
    const s = Array.from({
      length: len
    }, () => chance.character({ pool: '()' })).join('')
    assert.strictEqual(longestValidParentheses(s), brute(s), s)
  }
}
