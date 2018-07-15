public class PalindromeLinkedList234 {
    class Solution {
        public boolean isPalindrome(ListNode head) {
            if (head == null || head.next == null) {
                return true;
            }
            ListNode fast = head;
            ListNode slow = head;
            ListNode left = new ListNode(-1), right = new ListNode(-1);
            while (fast != null) {
                if (fast.next == null) {
                    left = right = slow;
                    break;
                }
                fast = fast.next;
                if (fast.next == null) {
                    left = slow;
                    right = slow.next;
                    break;
                }
                fast = fast.next;
                slow = slow.next;
            }
            if (left.val != right.val) {
                return false;
            }
            left = reverse(head, left);
            right = right.next;
            while (left != null && right != null) {
                if (left.val != right.val) {
                    return false;
                }
                left = left.next;
                right = right.next;
            }
            return true;
        }

        private ListNode reverse (ListNode head, ListNode end) {
            if (head == end) {
                return null;
            }
            ListNode prev = head;
            head = head.next;
            while (head != end) {
                ListNode next = head.next;
                head.next = prev;
                prev = head;
                head = next;
            }
            return prev;
        }
    }
}
