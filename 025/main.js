/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  // k <= length
  const dummy = new ListNode(-1)
  dummy.next = head
  let start = dummy
  let end = dummy
  while (true) {
    let cnt = 0
    while (cnt < k && end != null) {
      end = end.next
      cnt += 1
    }
    if (cnt < k || end == null) {
      break
    }
    let nextStart = start.next
    for (let _ = 0; _ < k - 1; _++) {
      const moving = start.next
      start.next = moving.next
      moving.next = end.next
      end.next = moving
    }
    start = end = nextStart
  }
  return dummy.next
}

function ListNode (val) {
  this.val = val
  this.next = null
}

if (process.env.LZS) {
  // local test
  const { arrToList, listToArr } = require('../utils')
  const assert = require('chai').assert
  assert.deepEqual(listToArr(
    reverseKGroup(arrToList([1, 3, 4, 5]), 2)
  ), [3, 1, 5, 4])

  assert.deepEqual(listToArr(
    reverseKGroup(arrToList([1, 3, 4]), 2)
  ), [3, 1, 4])

  assert.deepEqual(listToArr(
    reverseKGroup(arrToList([1, 3, 4, 5]), 4)
  ), [5, 4, 3, 1])

  assert.deepEqual(listToArr(
    reverseKGroup(arrToList([1, 3, 4, 5]), 3)
  ), [4, 3, 1, 5])

  assert.deepEqual(listToArr(
    reverseKGroup(arrToList([1, 3, 4, 5]), 1)
  ), [1, 3, 4, 5])

  assert.deepEqual(listToArr(
    reverseKGroup(arrToList([1, 3, 4, 5]), 0)
  ), [1, 3, 4, 5])

  assert.deepEqual(listToArr(
    reverseKGroup(arrToList([1]), 1)
  ), [1])
}
