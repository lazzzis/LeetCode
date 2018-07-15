import java.util.LinkedList;

public class MaximumWidthofBinaryTree662 {
    class Solution {
        public int widthOfBinaryTree(TreeNode root) {
            LinkedList<Node> list = new LinkedList<>();
            list.add(new Node(root, 0));
            int ans = 0;
            while (!list.isEmpty()) {
                LinkedList <Node> next = new LinkedList<>();
                int max = Integer.MIN_VALUE;
                int min = Integer.MAX_VALUE;
                for (Node node : list) {
                    max = Math.max(max, node.pos);
                    min = Math.min(min, node.pos);
                    if (node.root.left != null) {
                        next.add(new Node(node.root.left, node.pos * 2));
                    }
                    if (node.root.right != null) {
                        next.add(new Node(node.root.right, node.pos * 2 + 1));
                    }
                }
                ans = Math.max(max - min + 1, ans);
                list = next;
            }
            return ans;
        }

        class Node {
            TreeNode root;
            int pos = 0;
            public Node (TreeNode root, int pos) {
                this.root = root; this.pos = pos;
            }
        }
    }
}
