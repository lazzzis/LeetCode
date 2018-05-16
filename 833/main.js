/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (S, indexes, sources, targets) {
  const maps = {}
  for (let i = 0; i < indexes.length; i++) {
    const idx = indexes[i]
    const source = sources[i]
    const target = targets[i]
    if (S.indexOf(source, idx) === idx) {
      maps[idx] = {
        source,
        target
      }
    }
  }
  let ans = ''
  let i = 0
  while (i < S.length) {
    if (maps[i] != null) {
      ans += maps[i].target
      i += maps[i].source.length
    } else {
      ans += S[i]
      i++
    }
  }
  return ans
}
