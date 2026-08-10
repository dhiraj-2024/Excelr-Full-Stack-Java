

public class Main {
    public static void main(String[] args) {
        int[] nums = { 2, 0, 5, 4, 0, 1, 0, 0, 4, 7, 8 };
        int n = nums.length;
        int j = 0;
        for (int i = 0; i < n; i++) {
            if (nums[i] != 0) {
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                j++;
            }
        }
        for (int i = 0; i < n; i++) {
            System.out.println(nums[i]);
        }

    }
}
