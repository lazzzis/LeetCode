/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  function dfs (root, index, obj) {
    obj[index] = root.val
    if (root.left) {
      dfs(root.left, index + '0', obj)
    }
    if (root.right) {
      dfs(root.right, index + '1', obj)
    }
  }
  if (root == null) return JSON.parse(root)
  const obj = {}
  dfs(root, '', obj)
  return JSON.stringify(obj)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  function dfs (index, obj) {
    const tn = new TreeNode(obj[index])
    if (index + '0' in obj) {
      tn.left = dfs(index + '0', obj)
    }
    if (index + '1' in obj) {
      tn.right = dfs(index + '1', obj)
    }
    return tn
  }
  const obj = JSON.parse(data)
  return obj && dfs('', JSON.parse(data))
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
