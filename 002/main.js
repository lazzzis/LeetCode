/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(-1)
  let cur = dummy
  let carry = 0
  while (l1 != null || l2 != null || carry !== 0) {
    cur.next = new ListNode(-1)
    cur = cur.next
    let val1 = l1 == null ? 0 : l1.val
    let val2 = l2 == null ? 0 : l2.val
    cur.val = (val1 + val2 + carry) % 10
    carry = Math.floor((val1 + val2 + carry) / 10)

    l1 = l1 == null ? l1 : l1.next
    l2 = l2 == null ? l2 : l2.next
  }
  return dummy.next
}

if (process.env.next) { // local test
  const assert = require('chai').assert
  let l1 = {
    val: 2,
    next: {
      val: 4,
      next: {
        val: 3,
        next: null
      }
    }
  }
  let l2 = {
    val: 5,
    next: {
      val: 6,
      next: {
        val: 3,
        next: null
      }
    }
  }
  assert.deepEqual(addTwoNumbers(l1, l2), {
    val: 8,
    next: {
      val: 0,
      next: {
        val: 6,
        next: null
      }
    }
  })
}
