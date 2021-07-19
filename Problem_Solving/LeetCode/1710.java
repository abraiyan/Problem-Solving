import java.util.Arrays;
import java.util.Comparator;

class Solution1710 {
    public int maximumUnits(int[][] boxTypes, int truckSize) {
        Arrays.sort(boxTypes, Comparator.comparingDouble(o -> o[1]));
        int output = 0;
        int i = boxTypes.length - 1;

        while (truckSize != 0 && i >= 0) {
            if (truckSize >= boxTypes[i][0]) {
                truckSize -= boxTypes[i][0];
                output += boxTypes[i][1] * boxTypes[i][0];
            } else {
                output += boxTypes[i][1] * truckSize;
                break;
            }
            i--;
        }

        return output;
    }
}