/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  function helper (root, level, arr) {
    if (arr[level] == null) arr[level] = [ root.val ]
    else arr[level].push(root.val)

    if (root.left) helper(root.left, level + 1, arr)
    if (root.right) helper(root.right, level + 1, arr)
  }
  if (root == null) return []
  const ans = []
  helper(root, 0, ans)
  return ans
};
