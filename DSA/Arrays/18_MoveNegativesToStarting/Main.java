import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[] nums = { 1, -2, 3, -4, 5, -6 };
        int n = nums.length;
        int j = 0;
        for (int i = 0; i < n; i++) {
            if (nums[i] < 0) {
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                j++;
            }
        }
        System.out.println(Arrays.toString(nums));
    }
}
