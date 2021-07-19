import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution1403 {

    public List<Integer> minSubsequence(int[] nums) {
        Arrays.sort(nums);
        int total = 0;
        int temp = 0;
        List<Integer> output = new ArrayList<>();

        for (int n : nums)
            total += n;
        for (int i = nums.length - 1; i >= 0; i--) {
            temp += nums[i];
            total -= nums[i];
            output.add(nums[i]);
            if (temp > total)
                break;
        }

        return output;
    }
}