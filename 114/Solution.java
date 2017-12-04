/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {

    private TreeNode head;
    private TreeNode cur;

    public void flatten(TreeNode root) {
        this.cur = this.head = new TreeNode(-1);
        helper(root);
        //return head.right;
    }

    private void helper (TreeNode root) {
        if (root == null) return ;
        this.cur.right = root;
        this.cur = root;
        TreeNode right = root.right;
        helper(root.left);
        root.left = null;
        helper(right);
    }
}
