// https://www.youtube.com/watch?v=QXNvEz-GwQ4&index=50&list=PLH8TFsY0qnE2R9kf_9vahNY6pG9601z_4
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  // return /^\s*[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?\s*$/ig.test(s)
  // return !Number.isNaN(+s) && !Number.isNaN(Number.parseFloat(s))
  function isDigit (s) {
    return '0'.charCodeAt(0) <= s.charCodeAt(0) && s.charCodeAt(0) <= '9'.charCodeAt(0)
  }
  let flag = false
  let cur = 0
  while (s[cur] === ' ') cur++
  if (s[cur] === '+' || s[cur] === '-') cur++
  while (cur < s.length && isDigit(s[cur])) {
    cur++
    flag = true
  }
  if (s[cur] === '.') {
    cur++
    while (cur < s.length && isDigit(s[cur])) {
      cur++
      flag = true
    }
  }
  if (!flag) return false
  if (s[cur] === 'E' || s[cur] === 'e') {
    cur++
    flag = false
    if (s[cur] === '+' || s[cur] === '-') cur++
    while (cur < s.length && isDigit(s[cur])) {
      cur++
      flag = true
    }
  }
  while (s[cur] === ' ' && cur < s.length) cur++
  return flag && cur === s.length
};

if (process.env.LZS) {
  const assert = require('chai').assert
  assert.isTrue(isNumber('78 '))
  assert.isTrue(isNumber('  +78 '))
  assert.isTrue(isNumber('  -78E7'))
  assert.isTrue(isNumber('.8e10 '))
  assert.isTrue(isNumber('  .78 '))
  assert.isTrue(isNumber('  78. '))
  assert.isTrue(isNumber('  78.00 '))
  assert.isTrue(isNumber('  00078 '))
  assert.isTrue(isNumber('  000.78 '))
  assert.isTrue(isNumber('  78. '))
  assert.isTrue(isNumber('  78.E-7'))

  assert.isFalse(isNumber('=78E'))
  assert.isFalse(isNumber('  78E'))
  assert.isFalse(isNumber(' '))
  assert.isFalse(isNumber('E'))
  assert.isFalse(isNumber('.E'))
  assert.isFalse(isNumber('.'))
  assert.isFalse(isNumber('..2'))
  assert.isFalse(isNumber('2...00'))
  assert.isFalse(isNumber('2..'))
  assert.isFalse(isNumber('E9'))
  assert.isFalse(isNumber('E'))
}
