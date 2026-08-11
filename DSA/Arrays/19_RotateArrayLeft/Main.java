

public class Main {
    public static void main(String[] args) {
        int[] nums = { 2, 2, 3, 4, 2};
        int n = nums.length;
        int j = 0;
        for (int i = 1; i < n; i++) {
            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
        }

        for (int i = 0; i < n; i++) {
            System.out.print(nums[i]);
        }

    }
}
