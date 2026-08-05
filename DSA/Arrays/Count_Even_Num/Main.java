

public class Main {
    public static void main(String[] args) {
        int[] nums = { 1, 2, 3, 4, 5, 6, 7, 7, 8,44,89,24,100,2348 };
        int n = nums.length;
        int count = 0;
        for (int i = 0; i < n; i++) {
            if (nums[i] % 2 == 0) {
                count += 1;
            }
        }
        System.out.println("Total Even Numbers are : " + count);
    }
}
