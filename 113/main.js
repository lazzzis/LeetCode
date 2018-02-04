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
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  function dfs (root, sum, tempArr) {
    if (root == null) return
    tempArr.push(root.val)
    if (root.left == null && root.right == null) {
      // leaf
      if (root.val === sum) {
        ans.push(tempArr.slice())
      }
    } else {
      dfs(root.left, sum - root.val, tempArr)
      dfs(root.right, sum - root.val, tempArr)
    }
    tempArr.pop()
  }
  const ans = []
  dfs(root, sum, [])
  return ans
}
