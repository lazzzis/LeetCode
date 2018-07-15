public class IntersectionofTwoLinkedLists160 {
    /**
     * Definition for singly-linked list.
     * public class ListNode {
     *     int val;
     *     ListNode next;
     *     ListNode(int x) {
     *         val = x;
     *         next = null;
     *     }
     * }
     */
    public class Solution {
        public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
            int la = listLength(headA);
            int lb = listLength(headB);
            if (la < lb) {
                ListNode temp = headA; headA = headB; headB = temp;
                int t = la; la = lb; lb = t;
            }
            // la > lb;
            for (int i = 0; i < (la - lb); i++) {
                headA = headA.next;
            }
            while (headA != headB) {
                headA = headA.next;
                headB = headB.next;
            }
            return headA;
        }

        public int listLength (ListNode head) {
            int l = 0;
            ListNode pivot = head;
            while (pivot != null) {
                l++;
                pivot = pivot.next;
            }
            return l;
        }
    }
}
