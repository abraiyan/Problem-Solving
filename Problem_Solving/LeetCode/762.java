class Solution762 {

    public int countPrimeSetBits(int left, int right) {
        int[] counter = new int[right - left + 1];
        int x = 0;
        int output = 0;

        for (int i = left; i <= right; i++) {
            int temp = 0;
            int n = i;
            while (n != 0) {
                n = n & (n - 1);
                temp++;
            }
            counter[x++] = temp;
        }

        for (int n : counter) {
            if (isPrime(n))
                output++;
        }

        return output;
    }

    public boolean isPrime(int n) {
        if (n <= 1)
            return false;

        for (int i = 2; i <= n / 2; i++)
            if (n % i == 0)
                return false;

        return true;
    }

}