
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        // int[] nums = { 2, 15, 3, 78, 100, 56 };
        // int[] nums = { 1, 2, 3, 4, 5};
        // int[] nums = { 4, 2, 4, 1, 2};
        // int[] nums = { -3, -8, 5, 0, 2};
        // int[] nums = { 7, 7, 7, 7};
        // int[] nums = {14};
        int[] nums = { 0, 5, -2, 9, 0};
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] < nums[j]) {
                    int temp = nums[j];
                    nums[j] = nums[i];
                    nums[i] = temp;
                }
            }
        }
        System.out.println(Arrays.toString(nums));
    }
}
