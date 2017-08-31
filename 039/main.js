/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = []
  candidates.sort((x, y) => x - y)
  function dfs (res, index, left) {
    if (index >= candidates.length || left < 0 || candidates[index] > left) {
      return
    }
    for (let i = index; i < candidates.length; i++) {
      const item = candidates[i]
      if (item < left) {
        res.push(item)
        dfs(res, i, left - item)
        res.pop()
      } else if (item === left) {
        res.push(item)
        ans.push(res.slice())
        res.pop()
      } else {
        break
      }
    }
  }
  dfs([], 0, target)
  return ans
}

if (process.env.LZS) {
  // local test
  console.log(combinationSum([2, 3, 6, 7], 7))
  console.log(combinationSum([2, 5], 100))
}
