

public class Main {
    public static void main(String[] args) {
        int[] nums = { 5, 2, 8, 1, 9 };
        int n = nums.length;
        int sum = 0;
        for (int i = 0; i < n; i++) {
            sum += nums[i];
        }
        System.out.println(sum);
    }
}
