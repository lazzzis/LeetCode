/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = []
  function dfs (index, subset) {
    if (index === nums.length) {
      res.push(subset.slice())
      return
    }
    dfs(index + 1, subset)
    subset.push(nums[index])
    dfs(index + 1, subset)
    subset.pop()
  }
  dfs(0, [])
  return res
}

console.log(subsets([]))
