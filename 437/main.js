/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  function dfs (root, curSum, prefixSums) {
    if (root == null) {
      return 0
    }
    curSum += root.val
    const prefix = curSum - sum
    let ans = 0
    if (prefixSums[prefix] != null) {
      ans += prefixSums[prefix]
    }
    if (prefixSums[curSum] == null) {
      prefixSums[curSum] = 0
    }
    prefixSums[curSum]++
    ans += dfs(root.left, curSum, prefixSums)
    ans += dfs(root.right, curSum, prefixSums)
    prefixSums[curSum]--
    return ans
  }
  return dfs(root, 0, {0: 1})
}
