/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums == null || nums.length < 1) return []
  function dfs (temp) {
    if (temp.length === nums.length) ans.push(temp.slice())
    for (let i = 0; i < nums.length; i++) {
      if (!vis[i]) {
        vis[i] = true
        temp.push(nums[i])
        dfs(temp)
        temp.pop()
        vis[i] = false
      }
    }
  }
  const ans = []
  const vis = Array.from(nums, () => false)
  dfs([])
  return ans
}
