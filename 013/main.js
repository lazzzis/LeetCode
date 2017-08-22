/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let values = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let total = 0
  for (let i = 0; i < s.length; i += 1) {
    const current = values[s[i]]
    const prev = values[s[i - 1]]
    total += current
    if (i - 1 >= 0 && prev < current) {
      total -= 2 * prev
    }
  }
  return total
}

if (process.env.LZS) { // local test
  const assert = require('chai').assert
  assert.strictEqual(romanToInt('XX'), 20)
  assert.strictEqual(romanToInt('XIX'), 19)
  assert.strictEqual(romanToInt('MCMLIV'), 1954)
  assert.strictEqual(romanToInt('I'), 1)
  assert.strictEqual(romanToInt('MMXIV'), 2014)
  assert.strictEqual(romanToInt(''), 0)
  assert.strictEqual(romanToInt('DCXXI'), 621)
}
