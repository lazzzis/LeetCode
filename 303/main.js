/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.dp = new Array(nums.length + 1).fill(0)
  this.dp[0] = 0
  for (let i = 1; i < nums.length + 1; i ++) {
    this.dp[i] = this.dp[i - 1] + nums[i - 1]
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.dp[j + 1] - this.dp[i]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
