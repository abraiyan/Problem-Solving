import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

class Solution1441 {
    public static void main(String[] args) {
        int[] target = { 1, 2, 3 };
        List<String> list = buildArray(target, 3);
        for (String s : list) {
            System.out.println(s);
        }
    }

    public static List<String> buildArray(int[] target, int n) {
        Stack<Integer> stack = new Stack<>();
        List<String> output = new ArrayList<>();
        int j = 0;

        for (int i = 1; i <= n; i++) {
            stack.push(i);
            output.add("Push");

            if (target[j] != stack.peek()) {
                stack.pop();
                output.add("Pop");
            } else {
                j++;
            }

            if (j >= target.length) {
                break;
            }
        }

        return output;
    }
}
