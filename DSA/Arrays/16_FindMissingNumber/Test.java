
public class Test {
    public static void main(String[] args) {
        int[] nums = { 1, 2, 3, 5, 6, 7 };
        int n = nums.length;
        int missingNumber = 0;
        for (int i = 0; i < n - 1; i++) {
            if (nums[i + 1] - nums[i] > 1) {
                missingNumber = nums[i + 1] - 1;
            }
        }
        System.out.println(missingNumber);
    }
}
