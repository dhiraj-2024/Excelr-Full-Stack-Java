// WAP to find the smallest element in a given array.

public class Q11 {
    public static void main(String[] args) {
        int[] nums = { 10, 20, 30, 40, 5, 45, 3, 6 };
        int min = Integer.MAX_VALUE;
        for (int i : nums) {
            if (i < min) {
                min = i;
            }
        }
        System.out.println(min);
    }
}
