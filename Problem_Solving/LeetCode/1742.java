/*
    Problem: Maximum Number of Balls in a Box (https://leetcode.com/problems/maximum-number-of-balls-in-a-box/)
 
    #HashMap
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

class Solution {
    public static int countBalls(int lowLimit, int highLimit) {
        HashMap<Integer, Integer> map = new HashMap<>();
        int n = highLimit - lowLimit + 1;
        
        int max = 1;

        for(int i = lowLimit; i <= highLimit; i++) {
            int total = helper(i);
            if(map.containsKey(total)) {
                map.put(total, map.get(total) + 1);
                if(max < map.get(total)) {
                    max = map.get(total);
                }
            } else {
                map.put(total, 1);
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