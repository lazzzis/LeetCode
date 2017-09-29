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
var rotateRight = function(head, k) {
  const dump = new ListNode(-1)
  dump.next = head
  let fast = dump
  let slow = dump
  let i = 0
  while (i < k && fast.next != null) {
    fast = fast.next
    i++
  }
  if (i !== k || fast.next == null) { // k >= length
    k = k % i
    for (let j = 0; j < i - k; j++) {
      slow = slow.next
    }
  } else {
    while (fast.next != null) {
      fast = fast.next
      slow = slow.next
    }
  }
  fast.next = dump.next
  dump.next = slow.next
  slow.next = null
  return dump.next
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

if (process.env.LZS) {
  const { arrToList, listToArr } = require('../utils')
  const assert = require('chai').assert
  assert.deepStrictEqual(
    listToArr(rotateRight(arrToList([1, 2, 3]), 2)), [2, 3, 1]
  )
  assert.deepStrictEqual(
    listToArr(rotateRight(arrToList([1, 2, 3, 4, 5]), 2)), [4, 5, 1, 2, 3]
  )
  assert.deepStrictEqual(
    listToArr(rotateRight(arrToList([1, 2, 3]), 5)), [2, 3, 1]
  )
  assert.deepStrictEqual(
    listToArr(rotateRight(arrToList([1]), 2)), [1]
  )
  assert.deepStrictEqual(
    listToArr(rotateRight(arrToList([1]), 11)), [1]
  )
  assert.deepStrictEqual(
    listToArr(rotateRight(arrToList([]), 11)), []
  )
  assert.deepStrictEqual(
    listToArr(rotateRight(arrToList([1, 2]), 11)), [2, 1]
  )
  assert.deepStrictEqual(
    listToArr(rotateRight(arrToList([1, 2]), 110)), [1, 2]
  )
  assert.deepStrictEqual(
    listToArr(rotateRight(arrToList([1]), 1)), [1]
  )
}
