/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder == null || inorder == null) return null
  if (preorder.length === 0 || inorder.length === 0) return null
  if (preorder.length !== inorder.length) return null
  // left, right => inorder
  // rootIdx => preorder
  function helper (left, right, preRootIdx) {
    const root = new TreeNode(preorder[preRootIdx])
    const inRootIdx = map[root.val]
    if (inRootIdx > left) {
      root.left = helper(left, inRootIdx, preRootIdx + 1)
    }
    if (inRootIdx + 1 < right) {
      preRootIdx += inRootIdx - left + 1
      root.right = helper(inRootIdx + 1, right, preRootIdx)
    }
    return root
  }

  const map = {}
  for (let i = 0; i < inorder.length; i++) {
    map[inorder[i]] = i
  }
  return helper(0, inorder.length, 0)
};

// preorder [1, 2, 3, 4, 5]
// inorder [2, 3, 1, 4, 5 ]

// https://www.youtube.com/watch?v=S1wNG5hx-30&index=82&list=PLH8TFsY0qnE2R9kf_9vahNY6pG9601z_4
