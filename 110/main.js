/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root == null) return true
  let flag = true
  function depth (root) {
    if (!flag) return 0
    if (root == null) return 0
    const [left, right] = [
      depth(root.left),
      depth(root.right)
    ]
    if (Math.abs(left - right) > 1) {
      flag = false
    }
    return Math.max(left, right) + 1
  }
  depth(root)
  return flag
}
