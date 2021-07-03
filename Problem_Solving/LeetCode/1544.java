import java.util.Stack;

class Solution1544 {
    public String makeGood(String s) {
        Stack<Character> stack = new Stack<>();
        StringBuilder output = new StringBuilder();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (!stack.isEmpty() && ((c + 32) == stack.peek() || c == (stack.peek() + 32))) {
                stack.pop();
            } else {
                stack.push(c);
            }
        }

        for (char c : stack) {
            output.append(c);
        }

        return output.toString();
    }
}