const INT_MAX = Math.pow(2, 31) - 1
const INT_MIN = -Math.pow(2, 31)

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let positive = x >= 0 ? 1 : -1
  let ori = x >= 0 ? x : -x
  ori = ('' + ori).split('')
  ori = ori.reverse().join('')
  ori = positive * parseInt(ori)
  if (ori >= INT_MAX || ori <= INT_MIN) {
    return 0
  }
  return ori
}

if (process.env.LZS) { // local test
  const assert = require('chai').assert
  assert.strictEqual(reverse(123), 321)
  assert.strictEqual(reverse(-123), -321)
  assert.strictEqual(reverse(0), 0)
  assert.strictEqual(reverse(10), 1)
  assert.strictEqual(reverse(-10), -1)
  assert.strictEqual(reverse(214748364), 463847412)
  assert.strictEqual(reverse(1111111122), 0)
  assert.strictEqual(reverse(-1111111122), 0)
}
