class Solution {
    class Node {
        TreeNode root;
        int level;
        public Node (TreeNode r, int l) {
            root = r;
            level = l;
        }
    }
    public List<Integer> rightSideView(TreeNode root) {
        Map<Integer, Integer> map = new HashMap<>();
        Queue<Node> q = new LinkedList<>();
        LinkedList<Integer> list = new LinkedList<>();
        if (root == null) return list;
        q.offer(new Node(root, 0));
        while (!q.isEmpty()) {
            Node cur = q.poll();
            map.put(cur.level, cur.root.val);
            if (cur.root.left != null) q.offer(new Node(cur.root.left, cur.level + 1));
            if (cur.root.right != null) q.offer(new Node(cur.root.right, cur.level + 1));
        }
        for (int i = 0; i < map.size(); i++) {
            list.add(map.get(i));
        }
        return list;
    }
}
