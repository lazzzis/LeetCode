// https://www.youtube.com/watch?v=pEKyAuAWoNM
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
var countNodes = function (root) {
  if (root == null) return 0
  const leftLevel = countSide(root, (root) => root.left)
  const rightLevel = countSide(root, (root) => root.right)
  if (leftLevel === rightLevel) {
    return (1 << leftLevel) - 1
  } else {
    return 1 + countNodes(root.left) + countNodes(root.right)
  }
}

function countSide (root, iterator) {
  let level = 0
  while (root != null) {
    root = iterator(root)
    level++
  }
  return level
}

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}
