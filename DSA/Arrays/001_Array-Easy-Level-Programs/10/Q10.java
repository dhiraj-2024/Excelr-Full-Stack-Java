// WAP to find the largest element in a given array.

public class Q10 {
    public static void main(String[] args) {
        int[] nums = { 10, 20, 30, 40, 50 };
        int max = Integer.MIN_VALUE;
        for (int i : nums) {
            if (i > max) {
                max = i;
            }
        }
        System.out.println(max);
    }

}
