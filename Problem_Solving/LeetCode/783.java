class Solution783 {

    int min = Integer.MAX_VALUE;
    TreeNode previous = null;

    public int minDiffInBST(TreeNode root) {
        helper(root);
        return min;
    }

    public void helper(TreeNode root) {
        if (root != null) {
            helper(root.left);
            if (previous != null) {
                min = Math.min(min, root.val - previous.val);
            }
            previous = root;
            helper(root.right);
        }
    }
}