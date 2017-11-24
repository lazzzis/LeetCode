class Solution {
    public int closestValue(TreeNode root, double target) {
        double minDiff = Math.abs(root.val - target);
        int ans = root.val;
        TreeNode cur = root;
        while (cur != null) {
            double diff = Math.abs(cur.val - target);
            if (diff < minDiff) {
                minDiff = diff;
                ans = cur.val;
            }
            if (target < cur.val) {
                cur = cur.left;
            } else {
                cur = cur.right;
            }
        }
        return ans;
    }
}
