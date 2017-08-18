/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const repeatPoints = {}
  for (let i = 0; i <= 26; i++) {
    repeatPoints[String.fromCharCode('a'.charCodeAt(0) + i)] = -1
  }
  let nearestRepeat = -1
  let ans = 0
  s.split('').forEach(function (item, index) {
    if (repeatPoints[item] >= nearestRepeat) {
      ans = Math.max(ans, index - repeatPoints[item])
      nearestRepeat = repeatPoints[item]
    } else {
      ans = Math.max(ans, index - nearestRepeat)
    }
    repeatPoints[item] = index
  })
  return ans
}

if (process.env.LZS) { // local test
  const assert = require('assert')
  assert(lengthOfLongestSubstring('abcb') === 3)
  assert(lengthOfLongestSubstring('pwwkew') === 3)
  assert(lengthOfLongestSubstring('bbbb') === 1)
  assert(lengthOfLongestSubstring('b') === 1)
  assert(lengthOfLongestSubstring('abcdef') === 6)
  assert(lengthOfLongestSubstring('abcdeff') === 6)
  assert(lengthOfLongestSubstring('aabcdeff') === 6)
  assert(lengthOfLongestSubstring('aaaaabcdeff') === 6)
  assert(lengthOfLongestSubstring('aaaaabcdeeff') === 5)
  assert(lengthOfLongestSubstring('') === 0)
  assert(lengthOfLongestSubstring('dvdf') === 3)
}
