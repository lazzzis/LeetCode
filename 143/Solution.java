class Solution {
    public void reorderList(ListNode head) {
        if (head == null || head.next == null) return;
        ListNode p1, p2;
        p1 = p2 = head;
        while (p2.next != null && p2.next.next != null) {
            p1 = p1.next;
            p2 = p2.next.next;
        }
        ListNode middle = p1;
        ListNode current = middle.next;
        while (current.next != null) {
            ListNode moved = current.next;
            current.next = moved.next;
            moved.next = middle.next;
            middle.next = moved;
        }
        current = head;
        ListNode moved = middle.next;
        while (current != middle) {
            middle.next = moved.next;
            moved.next = current.next;
            current.next = moved;
            current = moved.next;
            moved = middle.next;
        }
//        print(head);
    }

    private void print(ListNode head) {
        List<Integer> list = new LinkedList<>();
        while (head != null) {
            list.add(head.val);
            head = head.next;
        }
        System.out.println(list.stream().map(x -> x+ "" ).collect(Collectors.joining(",")));
    }
}
