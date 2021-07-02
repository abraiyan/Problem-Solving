import java.util.Arrays;
import java.util.HashMap;
import java.util.Stack;

class Solution496 {

    public static void main(String[] args) {
        int[] nums1 = { 4, 1, 2 }, nums2 = { 1, 3, 4, 2 };
        int[] output = nextGreaterElement(nums1, nums2);
        System.out.println(Arrays.toString(output));
    }

    public static int[] nextGreaterElement(int[] nums1, int[] nums2) {
        Stack<Integer> stack = new Stack<>();

        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums2.length; i++) {
            map.put(nums2[i], i);
        }

        for (int i = nums2.length - 1; i >= 0; i--) {
            while (!stack.isEmpty() && nums2[i] > stack.peek()) {
                stack.pop();
            }

            int temp = nums2[i];
            nums2[i] = stack.isEmpty() ? -1 : stack.peek();
            stack.push(temp);
        }

        for (int i = 0; i < nums1.length; i++) {
            nums1[i] = nums2[map.get(nums1[i])];
        }

        return nums1;
    }
}