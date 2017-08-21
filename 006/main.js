/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s
  }

  let ans = ''
  let len = 2 * numRows - 2
  let i = 0

  // first row
  while (i < s.length) {
    ans += s[i]
    i += len
  }

  // middle rows
  for (let row = 1; row < numRows - 1; row++) {
    i = row
    while (true) {
      if (i >= s.length) {
        break
      }
      ans += s[i]

      let next = i + (len - 1 - 2 * (row - 1) - 1)
      if (next >= s.length) {
        break
      }
      ans += s[next]
      i += len
    }
  }

  // last row
  i = numRows - 1
  while (i < s.length) {
    ans += s[i]
    i += len
  }
  return ans
}

if (process.env.LZS) { // local test
  const assert = require('chai').assert
  assert.strictEqual(convert('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR')
  assert.strictEqual(convert('0123456789', 5), '0817926354')
  assert.strictEqual(convert('0123456789', 1), '0123456789')
  assert.strictEqual(convert('0123456789', 2), '0246813579')
  assert.strictEqual(convert('0123456', 2000), '0123456')
}
