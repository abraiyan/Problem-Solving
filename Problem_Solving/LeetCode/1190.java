import java.util.Stack;

class Solution1190 {

    public String reverseParentheses(String s) {
        Stack<StringBuilder> stack = new Stack<>();
        stack.push(new StringBuilder());

        for (char c : s.toCharArray()) {
            if (c == '(') {
                stack.push(new StringBuilder());
            } else if (c == ')') {
                StringBuilder lastOne = stack.pop();
                stack.peek().append(lastOne.reverse());
            } else {
                stack.peek().append(c);
            }
        }

        return stack.pop().toString();
    }
}