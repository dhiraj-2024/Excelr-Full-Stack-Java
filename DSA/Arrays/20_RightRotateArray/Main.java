
import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[] nums = { 1, 2, 3, 4, 5 };
        int n = nums.length;
        int last = nums[n-1];
        for (int i = n - 1; i > 0; i--) {
            nums[i] = nums[i - 1];
        }
        nums[0] = last;
        System.out.println(Arrays.toString(nums));
    }
}
