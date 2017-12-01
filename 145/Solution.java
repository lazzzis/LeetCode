class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> list = new LinkedList<>();
        if (root == null) return list;
        // recursion
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);
        while (!stack.empty()) {
            TreeNode cur = stack.pop();
            if (cur.left != null || cur.right != null) {
                stack.push(cur);
                if (cur.right != null) stack.push(cur.right);
                if (cur.left != null) stack.push(cur.left);
                cur.left = cur.right = null;
            } else {
                list.add(cur.val);
            }
        }
        return list;
    }
}
