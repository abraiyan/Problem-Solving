import java.util.PriorityQueue;

class Solution1005 {
    public int largestSumAfterKNegations(int[] nums, int k) {
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
        int total = 0;

        for (int n : nums) {
            total += n;
            priorityQueue.add(n);
        }

        while (k-- > 0) {
            int temp = -priorityQueue.poll();
            total += temp * 2;
            priorityQueue.add(temp);
        }

        return total;
    }
}