

public class Main {
    public static void main(String[] args) {
        int[] nums = { 1, 2, 3, 4, 5, 6, 7 };
        int k = 3;
        for (int i = 0; i < nums.length; i += k) {
            int end = Math.min(i + k, nums.length);
            System.out.print("[");
            for (int j = i; j < end; j++) {
                System.out.print(nums[j]);
                if (j < end - 1) {
                    System.out.print(", ");
                }
            }
            System.out.println("]");
        }
    }
}
