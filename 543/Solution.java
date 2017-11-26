class Solution {
    private int ans;

    public int diameterOfBinaryTree(TreeNode root) {
        ans = 0;
        dfs(root);
        return ans;
    }

    private int dfs(TreeNode root) {
        if (root == null) return 0;
        int leftHeight = dfs(root.left);
        int rightHeight = dfs(root.right);
        int length = leftHeight + rightHeight;
        this.ans = Math.max(ans, length);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}
