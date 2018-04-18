/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function (head, G) {
  let cnt = 0
  const set = new Set(G)
  while (head != null) {
    if (set.has(head.val)) {
      if (head.next == null || !set.has(head.next.val)) {
        cnt++
      }
    }
    head = head.next
  }
  return cnt
}

function ListNode (val) {
  this.val = val
  this.next = null
}
