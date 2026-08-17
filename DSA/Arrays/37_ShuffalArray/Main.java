import java.util.Arrays;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        int[] nums = { 1, 2, 3, 4, 5, 6 };
        Random random = new Random();
        random.nextInt(5);
        for (int i = nums.length - 1; i >= 0; i--) {
            int index = random.nextInt((i + 1));
            int temp = nums[i];
            nums[i] = nums[index];
            nums[index] = temp;
        }
        System.out.println(Arrays.toString(nums));

    }
}
