// https://www.youtube.com/watch?v=J9DgvL6L1nk&list=PLH8TFsY0qnE2R9kf_9vahNY6pG9601z_4&index=56
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const minn = new Array(word1.length)
  for (let i = 0; i < minn.length; i++) {
    minn[i] = new Array(word2.length).fill(-1)
  }
  function dp (i, j) {
    if (i === -1 && j === -1) {
      return 0
    }
    if (i === -1) { // '' -> '123'
      return j + 1
    }
    if (j === -1) { // '123' -> ''
      return i + 1
    }
    if (minn[i][j] !== -1) {
      return minn[i][j]
    }
    let ans = Math.min(
      dp(i - 1, j) + 1, // deletion
      dp(i, j - 1) + 1, // insertion
      dp(i - 1, j - 1) + (word1[i] === word2[j] ? 0 : 1) // replacement
    )
    minn[i][j] = ans
    return ans
  }
  return dp(word1.length - 1, word2.length - 1)
};

if (process.env.LZS) {
  const assert = require('chai').assert
  assert.strictEqual(minDistance('123', '12'), 1)
  assert.strictEqual(minDistance('1', '12'), 1)
  assert.strictEqual(minDistance('4', '12'), 2)
  assert.strictEqual(minDistance('', '12'), 2)
  assert.strictEqual(minDistance('123456789', 'aa'), 9)
  assert.strictEqual(minDistance('123456789', ''), 9)
}
