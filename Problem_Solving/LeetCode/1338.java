import java.util.Arrays;
import java.util.HashMap;

class Solution1338 {
    public int minSetSize(int[] arr) {
        int ans = 0;
        int removed = 0;

        HashMap<Integer, Integer> map = new HashMap<>();
        for (int x : arr) {
            map.put(x, map.getOrDefault(x, 0) + 1);
        }

        int[] freq = new int[map.values().size()];
        int i = 0;
        for (int x : map.values()) {
            freq[i++] = x;
        }
        Arrays.sort(freq);

        for (int j = freq.length - 1; j >= 0; j--) {
            if (removed < arr.length / 2) {
                ans++;
                removed += freq[j];
            } else {
                break;
            }
        }

        return ans;
    }
}