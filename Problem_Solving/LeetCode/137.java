class Solution137 {

    public static int singleNumber(int[] nums) {
        int output = 0;
        int[] counter = new int[32];

        for (int n : nums) {
            for (int i = 0; i < 32; i++) {
                if ((n & (1 << i)) != 0) {
                    counter[i]++;
                }
            }
        }

        for (int i = 0; i < 32; i++) {
            if (counter[i] % 3 == 1) {
                output = output + (1 << i);
            }
        }
        return output;
    }
}