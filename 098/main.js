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
var isValidBST = function(root) {
  function helper (root, minn, maxx) {
    const left = root.left
    const right = root.right
    const v = root.val
    if (!(minn < v && v < maxx)) return false
    if (left && !helper(left, minn, v)) return false
    if (right && !helper(right, v, maxx)) return false
    return true
  }
  return root == null || helper(root, -Infinity, Infinity)
};

console.log(isValidBST({
  val: 1,
  left: null,
  right: null
}))
