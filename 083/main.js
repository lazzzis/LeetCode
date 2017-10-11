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
var deleteDuplicates = function(head) {
  const dummy = new ListNode(-1)
  dummy.next = head
  let fast = head
  let slow = head
  while (slow != null) {
    while (fast != null && fast.val === slow.val) {
      fast = fast.next
    }
    slow.next = fast
    slow = slow.next
  }
  return dummy.next
};
