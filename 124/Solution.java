class Solution {
    private int ans;
    public int maxPathSum(TreeNode root) {
        ans = -10000000;
        helper(root);
        return ans;
    }

    private int helper (TreeNode root) {
        if (root == null) return 0;
        int max = root.val;
        int lmax = helper(root.left);
        int rmax = helper(root.right);
        ans = Math.max(root.val, ans);
        ans = Math.max(root.val + lmax, ans);
        ans = Math.max(root.val + rmax, ans);
        ans = Math.max(root.val + rmax + lmax, ans);
        return Math.max(Math.max(max, lmax + root.val), rmax + root.val);
    }
}
