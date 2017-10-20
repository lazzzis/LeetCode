/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (root == null) return []
  const stack = new Stack()
  stack.push(root)
  const ans = []
  while (!stack.empty()) {
    const top = stack.pop()
    if (top.right == null && top.left == null) {
      ans.push(top.val)
    } else {
      if (top.right != null) stack.push(top.right)
      stack.push(top)
      if (top.left != null) stack.push(top.left)
      top.left = top.right = null
    }
  }
  return ans
};

class Stack {
  constructor (vector = []) {
    this._vector = vector
  }

  pop () {
    if (this.length === 0) {
      throw new Error('Failed to pop: empty stack')
    }
    return this._vector.pop()
  }

  push (val) {
    return this._vector.push(val)
  }

  top () {
    return this._vector[this.length - 1]
  }

  get length () {
    return this._vector.length
  }

  empty () {
    return this.length === 0
  }

  clear () {
    this._vector = []
  }
}

// var inorderTraversal = function(root) {
//   if (root == null) return []
//   const ans = []
//   function dfs (root) {
//     if (root.left) dfs(root.left)
//     ans.push(root.val)
//     if (root.right) dfs(root.right)
//   }
//   dfs(root)
//   return ans
// };
