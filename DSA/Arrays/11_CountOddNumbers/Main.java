public class Main {
    public static void main(String[] args) {
        int[] nums = { 2, 3, 6, 9, 43, 66, 75, 23, 44, 12,-23,-2,-1 };
        int n = nums.length;
        int count = 0;
        for (int i = 0; i < n; i++) {
            if (nums[i] % 2 != 0) {
                count += 1;
            }
        }
        System.out.println("Total Odd numbers are :" + count);
    }
}