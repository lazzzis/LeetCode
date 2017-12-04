class LRUCache {
    class Node {
        int val;
        Node prev, next;

        public Node(int val) {
            this.val = val;
        }

        public Node() {
        }
    }

    private Node head, tail;
    private Map<Integer, Integer> map;
    private Map<Integer, Node> key2Node;
    private int capacity;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.head = new Node();
        this.tail = new Node();
        head.next = tail;
        tail.prev = head;
        this.map = new HashMap<>();
        this.key2Node = new HashMap<>();
    }

    private void insert(Node prev, Node next, Node node) {
        prev.next = next.prev = node;
        node.prev = prev;
        node.next = next;
    }

    private void remove(Node node) {
        Node prev = node.prev;
        Node next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    private void update (int key) {
        Node node = this.key2Node.get(key);
        this.remove(node);
        this.insert(tail.prev, tail, node);
    }

    public int get(int key) {
        if (!this.map.containsKey(key)) return -1;
        this.update(key);
        return this.map.get(key);
    }

    public void put(int key, int value) {
        if (this.map.containsKey(key)) {
            this.update(key);
        } else {
            Node newNode = new Node(key);
            if (this.map.entrySet().size() == this.capacity) {
                this.map.remove(head.next.val);
                this.key2Node.remove(head.next.val);
                this.remove(head.next);
            }
            this.key2Node.put(key, newNode);
            this.insert(tail.prev, tail, newNode);
        }
        this.map.put(key, value);
    }
}
