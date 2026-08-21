// Input:
// [16, 17, 4, 3, 5, 2]

// Output:
// [17, 5, 2]

public class Main {
    public static void main(String[] args) {
        int[] nums = { 16, 17, 4, 3, 5, 2 };
        int n = nums.length;
        int[] result = new int[n];
        int j = n - 1;
        result[j--] = nums[n - 1];
        int max = nums[n - 1];
        int count = 1;
        for (int i = n - 2; i >= 0; i--) {
            if (nums[i] > max) {
                max = nums[i];
                result[j] = max;
                j--;
                count++;
            }
        }
        for (int i = n-count; i < n; i++) {
            System.out.println(result[i]);
        }
    }
}
