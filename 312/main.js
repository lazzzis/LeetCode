/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  nums = nums.filter((item) => item)
  nums.unshift(1)
  nums.push(1)
  const vis = new Array(nums.length)
  for (let i = 0, len = vis.length; i < len; i++) {
    vis[i] = new Array(nums.length).fill(-1)
  }

  function dp (start, end) {
    if (vis[start][end] !== -1) {
      return vis[start][end]
    }
    if (end - start <= 1) {
      return 0
    }

    for (let i = start + 1; i < end; i++) {
      vis[start][end] = Math.max(
        vis[start][end],
        dp(start, i) + dp(i, end) + nums[start] * nums[i] * nums[end]
      )
    }
    return vis[start][end]
  }

  return dp (0, nums.length - 1)
};

if (process.env.LZS) {
  console.log(maxCoins([]))
  console.log(maxCoins([0]))
  console.log(maxCoins([3, 1, 5, 8]))
  console.log(maxCoins([10]))
  console.log(maxCoins([3, 1]))
  console.log(maxCoins([3, 1, 5, 8, 2, 3, 4]))
}
