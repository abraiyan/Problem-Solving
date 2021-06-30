import java.util.Stack;

class Solution {
    public int maxDepth(String s) {
        int height = 0;
        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c != '(' && c != ')') {
                continue;
            }

            if (c == '(') {
                stack.push(c);
                if (stack.size() > height)
                    height = stack.size();
            } else {
                stack.pop();
            }
        }

        if (stack.isEmpty())
            return height;
        else
            return 0;
    }
}