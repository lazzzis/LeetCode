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
var minDepth = function (root) {
  if (root == null) return 0
  const q = new Queue()
  q.push({ root, depth: 1 })
  while (!q.empty()) {
    const top = q.pop()
    const root = top.root
    if (root.left == null && root.right == null) return top.depth
    if (root.left) {
      q.push({
        root: root.left,
        depth: top.depth + 1
      })
    }
    if (root.right) {
      q.push({
        root: root.right,
        depth: top.depth + 1
      })
    }
  }
  return 0
}

class Queue {
  constructor () {
    this._front = this._back = { val: null, next: null }
    this._length = 0
  }

  push (val) {
    this._back.next = {
      val,
      next: null
    }
    this._back = this._back.next
    this._length += 1
  }

  pop () {
    if (this._length === 0) {
      throw new Error('failed to pop: empty queue')
    }
    this._length -= 1
    this._front = this._front.next
    return this._front.val
  }

  top () {
    if (this._length === 0) {
      throw new Error('Failed to top: empty queue')
    }
    return this._front.next.val
  }

  get length () {
    return this._length
  }

  empty () {
    return this._length === 0
  }

  clear () {
    this._front = this._back = { val: null, next: null }
    this._length = 0
  }
}
