class Problem342 {
    public boolean isPowerOfFour(int n) {
        if (n <= 0)
            return false;
        while (true) {

            if (n == 4 || n == 1)
                break;

            if (n % 4 != 0) {
                return false;
            }

            n = n / 4;
        }

        return true;
    }
}
