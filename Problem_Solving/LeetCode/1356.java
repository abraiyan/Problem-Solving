import java.util.Arrays;
import java.util.Comparator;

class Problem1356 {

    public static int[] sortByBits(int[] arr) {
        Integer[] output = new Integer[arr.length];

        for (int i = 0; i < arr.length; i++) {
            output[i] = arr[i];
        }

        Arrays.sort(output, Comparator.comparing(i -> Integer.bitCount(i) * 10000 + i));

        for (int i = 0; i < arr.length; i++) {
            arr[i] = output[i];
        }

        return arr;
    }
}