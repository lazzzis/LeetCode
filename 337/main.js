/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
  function dp (root) {
    if (root == null) return [0, 0]
    const lv = dp(root.left)
    const rv = dp(root.right)
    return [
      Math.max( // not robbed
        lv[0] + rv[0],
        lv[0] + rv[1],
        lv[1] + rv[1],
        lv[1] + rv[0]
      ),
      lv[0] + rv[0] + root.val // robbed,
    ]
  }
  return Math.max(...dp(root))
};
