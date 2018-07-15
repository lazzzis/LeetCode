public class ConvertBSTtoGreaterTree538 {
    class Solution {
        public TreeNode convertBST(TreeNode root) {
            helper(root, 0);
            return root;
        }

        public int helper (TreeNode root, int fromParent) {
            if (root == null) {
                return 0;
            }
            int right = helper(root.right, fromParent);
            int newVal = right + fromParent;
            int oldVal = root.val;
            root.val += newVal;
            int left = helper(root.left, root.val);
            return left + right + oldVal;
        }
    }
    // better solution: https://leetcode.com/submissions/detail/162582723/
}
