/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const dummy = new ListNode(-1)
  dummy.next = head
  const small = new ListNode(-1)
  let fast = dummy
  let slow = small
  while (fast.next != null) {
    if (fast.next.val < x) {
      const moved = fast.next
      fast.next = moved.next
      moved.next = slow.next
      slow.next = moved
      slow = moved
    } else {
      fast = fast.next
    }
  }
  slow.next = dummy.next
  return small.next
};
