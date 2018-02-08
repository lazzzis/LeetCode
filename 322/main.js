/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = Array.from({length: amount + 1}, () => Infinity)
  dp[0] = 0
  for (const value of coins) {
    let i = value
    while (i <= amount) {
      dp[i] = Math.min(dp[i], 1 + dp[i - value])
      i++
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}
