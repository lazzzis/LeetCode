/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let right = Math.ceil(x / 2)
  let left = 0
  while (right - left > 1) {
    const mid = (right + left) >> 1
    const midv = mid * mid
    if (midv > x) {
      right = mid
    } else if (midv < x) {
      left = mid
    } else {
      return mid
    }
  }
  if (right * right <= x) {
    return right
  }
  return left
};


if (process.env.LZS) {
  const assert = require('chai').assert
  for (let i = 0; i < 100; i++) {
    assert.strictEqual(mySqrt(i), Math.floor(Math.sqrt(i)), `${i} ??`)
  }
}
