import java.util.Random;

public class Main {
    public static void main(String[] args) {
        int[] nums = { 20, 30, 50, 63, 32 };
        Random random = new Random();
        int n = nums.length;
        int index = random.nextInt(n);
        System.out.println(nums[index]);

    }
}
