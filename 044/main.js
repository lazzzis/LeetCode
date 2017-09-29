/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
// solution: https://www.youtube.com/watch?v=9OnS06RYQiw&list=PLH8TFsY0qnE2R9kf_9vahNY6pG9601z_4&index=37
}

if (process.env.LZS) {
  const assert = require('chai').assert
  assert.isTrue(isMatch('11', '*'))
  assert.isTrue(isMatch('11', '*1'))
  assert.isTrue(isMatch('11', '1*'))
  assert.isTrue(isMatch('1112321313123', '*23'))
  assert.isTrue(isMatch('1112321313123', '1*23'))
  assert.isTrue(isMatch('', '*'))
  assert.isTrue(isMatch('+', '*+'))
  assert.isFalse(isMatch('1112321313123', '*4'))
  assert.isFalse(isMatch('babaaababaabababbbbbbaabaabbabababbaababbaaabbbaaab'
    , '***bba**a*bbba**aab**b'))
}
