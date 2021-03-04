class Solution {
    public boolean isHappy(int n) {
        Set<Integer> set = new HashSet<Integer>();
        int sum, remaining;

        while(set.add(n)) {
            sum = 0;
            while(n != 0) {
                remaining = n % 10;
                sum += remaining * remaining;
                n = n / 10;
            }
            if(sum == 1) return true;
            else n = sum;
        }
        return false;
    }
}