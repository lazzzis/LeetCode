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
    public TreeNode constructMaximumBinaryTree(int[] nums) {
        if (nums.length == 0) return null;
        return buildTree(nums, 0, nums.length);
    }

    private TreeNode buildTree (int[] nums, int l, int r) {
        if (r <= l) return null;
        int maxIds = max(nums, l, r);
        TreeNode root = new TreeNode(nums[maxIds]);
        root.left = buildTree(nums, l, maxIds);
        root.right = buildTree(nums, maxIds + 1, r);
        return root;
    }

    private int max(int[] nums, int l, int r) {
        int maxx = nums[l];
        int res = l;
        for (int i = l; i < r; i++) {
            if (nums[i] > maxx) {
                maxx = nums[i];
                res = i;
            }
        }
        return res;
    }
}
