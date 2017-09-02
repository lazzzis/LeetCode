/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const counts = {}
  for (const item of candidates) {
    counts[item] = counts[item] == null ? 1 : counts[item] + 1
  }
  candidates = Object.keys(counts).map(x => parseInt(x, 10))
  const ans = []
  function dfs (res, index, left) {
    if (index >= candidates.length || candidates[index] > left) {
      return
    }
    dfs(res, index + 1, left)
    const item = candidates[index]
    const reduced = []
    for (let i = 1; i <= counts[item]; i++) {
      reduced.push(item)
      if (item * i < left) {
        dfs(res.concat(reduced), index + 1, left - item * i)
      } else if (item * i === left) {
        ans.push(res.concat(reduced).slice())
      } else {
        break
      }
    }
  }
  dfs([], 0, target)
  return ans
}

if (process.env.LZS) {
  console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
  console.log(combinationSum2([0], 8))
}
