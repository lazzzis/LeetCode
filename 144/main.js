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
var preorderTraversal = function(root) {
  if (root == null) return []
  const stack = new Stack()
  stack.push(root)
  const ans = []
  while (!stack.empty()) {
    const root = stack.pop()
    ans.push(root.val)
    if (root.right != null) stack.push(root.right)
    if (root.left != null) stack.push(root.left)
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
