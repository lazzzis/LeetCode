class Solution {
    public RandomListNode copyRandomList(RandomListNode head) {
        if (head == null) return null;
        RandomListNode root = new RandomListNode(head.label);
        RandomListNode dummy = root;
        RandomListNode dummyHead = head;
        Map<RandomListNode, RandomListNode> map = new HashMap<>();
        map.put(head, root);
        while (head.next != null) {
            root.next = new RandomListNode(head.next.label);
            map.put(head.next, root.next);
            head = head.next;
            root = root.next;
        }
        head = dummyHead;
        root = dummy;
        while (head != null) {
            if (head.random != null) {
                root.random = map.get(head.random);
            }
            root = root.next;
            head = head.next;
        }
        return dummy;
    }
}
