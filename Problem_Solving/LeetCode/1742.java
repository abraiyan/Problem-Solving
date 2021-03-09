class Solution {
    public static int countBalls(int lowLimit, int highLimit) {
        HashMap<Integer, Integer> map = new HashMap<>();
        int n = highLimit - lowLimit + 1;

        for(int i = lowLimit; i <= highLimit; i++) {
            int total = helper(i);
            if(map.containsKey(total)) {
                map.put(total, map.get(total) + 1);
            } else {
                map.put(total, 1);
            }
        }

        int max = 0;

        for(int key : map.keySet()) {
            if(map.get(key) > max) {
                max = map.get(key);
            }
        }
        
        return max;
    }

    public static int helper(int n) {
        int total = 0;
        while(n != 0) {
            total += n % 10;
            n = n / 10;
        }
        return total;
    }
}