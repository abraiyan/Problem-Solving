/*
    Problem: Decode XORed Array (https://leetcode.com/problems/decode-xored-array/)
*/

class Problem1837 {

    public int sumBase(int n, int k) {
        int total = 0;

        while (n != 0) {
            total += n % k;
            n = n / k;
        }
        return total;
    }
}
