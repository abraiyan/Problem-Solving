import java.util.Stack;

class Solution682 {
    public int calPoints(String[] ops) {
        Stack<Integer> stack = new Stack<>();
        int total = 0;

        for (String s : ops) {

            if (s.equals("C")) {
                stack.pop();
            } else if (s.equals("D")) {
                stack.push(stack.peek() * 2);
            } else if (s.equals("+")) {
                int a = stack.pop();
                int b = stack.pop();
                stack.push(b);
                stack.push(a);
                stack.push(a + b);
            } else {
                int n = Integer.parseInt(s);
                stack.push(n);
            }

        }

        while (!stack.isEmpty()) {
            total += stack.pop();
        }

        return total;
    }
}