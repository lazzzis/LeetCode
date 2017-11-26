class Solution {
    public List<String> binaryTreePaths(TreeNode root) {
        List<String> list = new LinkedList<>();
        if (root == null) return list;
        dfs(root, "", list);
        return list;
    }

    private void dfs(TreeNode root, String path, List<String> list) {
        if (root.left == null && root.right == null) {
            list.add(path + root.val);
            return;
        }
        if (root.left != null) dfs(root.left, path + root.val + "->", list);
        if (root.right != null) dfs(root.right, path + root.val + "->", list);
    }
}
