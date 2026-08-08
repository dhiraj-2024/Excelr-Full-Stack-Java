import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[] nums = { 5,4,5,2,8,2};
        int n = nums.length;

        for (int i = 0; i < n; i++) {
            int num = nums[i];
            for (int j = i + 1; j < n; j++) {
                if (num == nums[j]) {
                    System.out.println(nums[j]);
                }
            }
        }

        System.out.println(Arrays.toString(nums));

    }
}