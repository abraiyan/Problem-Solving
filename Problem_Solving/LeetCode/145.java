class Solution145 {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> output = new ArrayList<>();
        helper(root, output);
        return output;
    }

    public void helper(TreeNode root, List<Integer> output) {
        if (root != null) {
            helper(root.left, output);
            helper(root.right, output);
            output.add(root.val);
        }
    }
}