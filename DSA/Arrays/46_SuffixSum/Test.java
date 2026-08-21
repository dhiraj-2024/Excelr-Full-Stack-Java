import java.util.Arrays;

public class Test {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5 };
        int n = arr.length;
        int cSum = 0;
        for (int i = n - 1; i >= 0; i--) {
            cSum += arr[i];
            arr[i] = cSum;
        }
        System.out.println(Arrays.toString(arr));
    }
}
