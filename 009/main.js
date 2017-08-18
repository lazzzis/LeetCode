/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  let start = Math.pow(10, Math.floor(Math.log10(x)))
  let end = 1
  while (start > end) {
    if (Math.floor(x / start) % 10 !== Math.floor(x / end) % 10) {
      return false
    }
    start /= 10
    end *= 10
  }
  return true
}

if (process.env.LZS) { // local test
  const assert = require('assert')
  assert(isPalindrome(101))
  assert(isPalindrome(10101))
  assert(isPalindrome(1221))
  assert(isPalindrome(1223) === false)
  assert(isPalindrome(-1221) === false)
  assert(isPalindrome(1))
  assert(isPalindrome(0))
  assert(isPalindrome(29992))
}
