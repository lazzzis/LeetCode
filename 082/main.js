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
  let slow = dummy
  let fast = dummy
  while (slow != null) {
    let cnt = 0
    while (fast.next != null && slow.next.val === fast.next.val) {
      cnt++
      fast = fast.next
    }
    if (cnt > 1) {
      slow.next = fast.next
      fast = slow
    } else {
      slow = slow.next
    }
  }
  return dummy.next
};
