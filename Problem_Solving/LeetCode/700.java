class Solution700 {
    public TreeNode searchBST(TreeNode root, int val) {
        return helper(root, val);
    }
    
    public TreeNode helper(TreeNode node, int val) {
        if(node == null) return null;
        if(node.val == val) return node;
        else if(val < node.val) {
            return helper(node.left, val);
        } else {
            return helper(node.right, val);
        }
    }
}