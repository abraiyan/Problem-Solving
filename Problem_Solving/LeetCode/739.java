import java.util.Arrays;
import java.util.Stack;

class Solution739 {
    public static void main(String[] args) {
        int[] temperatures = { 89, 62, 70, 58, 47, 47, 46, 76, 100, 70 };
        System.out.println(Arrays.toString(dailyTemperatures(temperatures)));
    }

    public static int[] dailyTemperatures(int[] temperatures) {
        Stack<TempObject> stack = new Stack<>();

        for (int i = temperatures.length - 1; i >= 0; i--) {
            while (!stack.isEmpty() && temperatures[i] >= stack.peek().value) {
                stack.pop();
            }

            int temp = temperatures[i];
            temperatures[i] = stack.isEmpty() ? 0 : stack.peek().index - i;
            stack.push(new TempObject(temp, i));
        }

        return temperatures;
    }
}

class TempObject {
    public int value;
    public int index;

    public TempObject(int value, int index) {
        this.index = index;
        this.value = value;
    }
}