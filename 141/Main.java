public class LinkedListCycle141 {
    /**
     * Definition for singly-linked list.
     * class ListNode {
     *     int val;
     *     ListNode next;
     *     ListNode(int x) {
     *         val = x;
     *         next = null;
     *     }
     * }
     */
    public class Solution {
        public boolean hasCycle(ListNode head) {
            if (head == null) {
                return false;
            }
            ListNode fast = head;
            ListNode slow = head;
            while (fast != null) {
                fast = fast.next;
                if (fast == null) {
                    return false;
                }
                fast = fast.next;
                slow = slow.next;
                if (fast == slow) {
                    return true;
                }
            }
            return false;
        }
    }
}
