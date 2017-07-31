/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let ans = []
  let rem = 1
  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + rem
    ans.unshift(sum % 10)
    rem = Math.floor(sum / 10)
    if (rem === 0) {
      ans = digits.slice(0, i).concat(ans)
      break
    }
  }
  if (rem) {
    ans.unshift(rem)
  }
  return ans
}

if (process.env.LZS) { // local test
  const assert = require('assert')
  assert.deepEqual(plusOne([1, 2, 3]), [1, 2, 4])
  assert.deepEqual(plusOne([1, 2, 9]), [1, 3, 0])
  assert.deepEqual(plusOne([9, 2, 9]), [9, 3, 0])
  assert.deepEqual(plusOne([9, 9, 9]), [1, 0, 0, 0])
  assert.deepEqual(plusOne([9]), [1, 0])
}
