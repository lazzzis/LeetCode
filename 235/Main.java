public class LowestCommon235 {
    class Solution {

        public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
            if (p.val > q.val) {
                TreeNode t = p;
                p = q;
                q = t;
            }
            while (root != null) {
                if (root.val >= p.val && root.val <= q.val) {
                    return root;
                }
                if (root.val > p.val && root.val > q.val) {
                    root = root.left;
                } else if (root.val < p.val && root.val < q.val) {
                    root = root.right;
                }
            }
            return null;
        }
    }
}
