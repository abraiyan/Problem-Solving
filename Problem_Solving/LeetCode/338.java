/*
    Problem: Counting Bits (https://leetcode.com/problems/counting-bits/)
*/

class Solution {
    public int[] countBits(int n) {
        
        int[] output = new int[n + 1];
        
        for (int i = 0; i <= n; i++) {
            int counter = 0;
            int currentNumber = i;
            while (currentNumber != 0) {
                counter++;
                currentNumber &= (currentNumber - 1);
            }
            
            output[i] = counter;
        }
        
        return output;
    }
}