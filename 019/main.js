/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(-1)
  dummy.next = head
  const points = [dummy]
  let cur = head
  while (cur) {
    points.push(cur)
    cur = cur.next
  }
  const prev = points[points.length - n - 1]
  prev.next = prev.next.next
  return dummy.next
}

if (process.env.LZS) { // local test
  function ListNode (val) {
      this.val = val
      this.next = null
  }
  const assert = require('chai').assert
  assert.deepStrictEqual(removeNthFromEnd({
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: null
      }
    }
  }, 3), {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  })
}
