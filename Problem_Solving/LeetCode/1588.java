/*
    Problem: Sum of All Odd Length Subarrays (https://leetcode.com/problems/sum-of-all-odd-length-subarrays/)
 
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

class Solution {
    public int sumOddLengthSubarrays(int[] A) {
        int result = 0;
        
        for (int i = 0; i < A.length; i++) {
            result += (((i + 1) * (A.length - i) + 1) / 2) * A[i];
        }
        return result;
    }
}