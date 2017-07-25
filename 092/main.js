/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(first, m, n) {
  let pos = 0
  const head = {
    val: -1,
    next: first
  }
  let pivot = head
  while (pos < m - 1) {
    pivot = pivot.next
    pos++
  }

  const firstTail = pivot
  const secondHead = {
    val: -1,
    next: pivot.next
  }
  pivot = pivot.next
  pos++
  while (pos < n) {
    const neck = secondHead.next
    const next = pivot.next.next
    secondHead.next = pivot.next
    secondHead.next.next = neck

    pivot.next = next
    pos++
  }
  firstTail.next = secondHead.next

  return head.next
};

if (require.main === module) {
  const head = {}
  let pivot = head
  for (let i = 1; i < 3; i++) {
    pivot.val = i
    if (i === 5) {
      pivot.next = null
    } else {
      pivot.next = {}
    }
    pivot = pivot.next
  }
  pivot = reverseBetween(head, 1, 2)
  while (pivot) {
    console.log(pivot)
    pivot = pivot.next
  }
}
