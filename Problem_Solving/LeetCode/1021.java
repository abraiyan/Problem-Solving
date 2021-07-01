import java.util.Stack;

class Solution1021 {

    public static void main(String[] args) {
        System.out.println(removeOuterParentheses("(()())(())"));
    }

    public static String removeOuterParentheses(String s) {
        Stack<Character> stack = new Stack<>();
        StringBuilder stringBuilder = new StringBuilder();
        boolean wasEmpty = true;

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (stack.isEmpty()) {
                wasEmpty = true;
            } else {
                wasEmpty = false;
            }

            if (c == '(') {
                stack.push(c);
            }

            if (c == ')') {
                stack.pop();
            }

            if (!wasEmpty && !stack.isEmpty()) {
                stringBuilder.append(c);
            }
        }

        return stringBuilder.toString();
    }
}