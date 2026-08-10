

public class Test {
    public static void main(String[] args) {
        int[] nums = { 1, 2, 5, 1, 7, 2, 5, 1 };
        int n = nums.length;
        int unique = 0;
        for (int i = 0; i < n; i++) {
            unique ^= nums[i];
        }
        System.out.println(unique);
    }
}
