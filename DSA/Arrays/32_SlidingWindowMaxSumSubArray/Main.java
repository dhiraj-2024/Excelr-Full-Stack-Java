

public class Main {
    public static void main(String[] args) {
        // int[] nums = { 2, 1, 5, 1, 3, 2 };
        // int[] nums = { -2, -1, -5, -3, -4};
        int[] nums = { 1, 2, 3, 4};
        int w = 4;
        int current = 0;
        for (int i = 0; i < w; i++) {
            current += nums[i];
        }

        int max = current;
        for (int i = 1; i <= nums.length - w; i++) {
            current = current - nums[i - 1] + nums[i + w - 1];
        }
        if (current > max) {
            max = current;
        }
        System.out.println(max);
    }
}
