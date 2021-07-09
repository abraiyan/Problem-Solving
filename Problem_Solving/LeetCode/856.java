class Solution {
    public int scoreOfParentheses(String S) {
        Stack<Integer> stack = new Stack<>();
        int ans = 0;
        for (char c : S.toCharArray()) {
            if (c == '(') {
                stack.push(ans);
                ans = 0;
            } else {
                ans = stack.pop() + Math.max(ans * 2, 1);
            }
        }
        return ans;
    }
}