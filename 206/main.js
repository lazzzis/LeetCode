/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  const dummy = new ListNode(-1)
  let pointer = head
  while (pointer != null) {
    const next = pointer.next
    pointer.next = dummy.next
    dummy.next = pointer
    pointer = next
  }
  return dummy.next
};
