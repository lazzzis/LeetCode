/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const firstOcc = {}
  const prevOcc = {}
  for (let i = 0; i < needle.length; i++) {
    prevOcc[i] = Object.assign({}, firstOcc)
    firstOcc[needle[i]] = i
  }
  let cur = needle.length - 1
  while (cur < haystack.length) {
    let i
    for (i = 0; i < needle.length; i++) {
      const needlePos = needle.length - 1 - i
      if (needle[needle.length - 1 - i] !== haystack[cur - i]) {
        const prev = prevOcc[needlePos][haystack[cur - i]]
        cur += (needle.length - 1 - i) - (prev == null ? -1 : prev)
        break
      }
    }
    if (i === needle.length) {
      return cur - (needle.length - 1)
    }
  }
  return -1
}

if (process.env.LZS) {
  // local test
  const assert = require('chai').assert
  assert.strictEqual(strStr('123', '3'), 2)
  assert.strictEqual(strStr('123', '4'), -1)
  assert.strictEqual(strStr('123234', '234'), 3)
  assert.strictEqual(strStr('123234', '2345'), -1)
  assert.strictEqual(strStr('123234', '123'), 0)
  assert.strictEqual(strStr('mississippi', 'issi'), 1)
}
