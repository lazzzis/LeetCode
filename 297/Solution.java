/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Codec {

// Encodes a tree to a single string.
public String serialize(TreeNode root) {
        if (root == null) return "null";
        Queue<TreeNode> q = new LinkedList<>();
        StringBuilder sb = new StringBuilder("");
        q.offer(root);
        while (!q.isEmpty()) {
                TreeNode cur = q.poll();
                if (cur == null) {
                        sb.append("null ");
                } else {
                        sb.append(cur.val).append(" ");
                        q.offer(cur.left);
                        q.offer(cur.right);
                }
        }
        return sb.toString();
}

// Decodes your encoded data to tree.
public TreeNode deserialize(String data) {
        if (data.equals("null")) return null;
        String[] nodes = data.split(" ");
        int idx = 0;
        Queue<TreeNode> q = new LinkedList<>();
        TreeNode root = new TreeNode(Integer.parseInt(nodes[idx++]));
        q.offer(root);
        while (!q.isEmpty()) {
                TreeNode cur = q.poll();
                if (nodes[idx].equals("null")) {
                        cur.left = null;
                } else {
                        cur.left = new TreeNode(Integer.parseInt(nodes[idx]));
                        q.offer(cur.left);
                }
                idx++;
                if (nodes[idx].equals("null")) {
                        cur.right = null;
                } else {
                        cur.right = new TreeNode(Integer.parseInt(nodes[idx]));
                        q.offer(cur.right);
                }
                idx++;
        }
        return root;
}
}
