class Solution {
    public boolean hasPathSum(TreeNode root, int sum) {
        if (root == null) return false;
        if (root.left != null && hasPathSum(root.left, sum - root.val)) return true;
        if (root.right != null && hasPathSum(root.right, sum - root.val)) return true;
        if (root.left == null && root.right == null) return root.val == sum;
        return false;
    }
}
