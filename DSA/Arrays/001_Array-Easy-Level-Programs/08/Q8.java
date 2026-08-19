// WAP to search for a specific element in a given array.

public class Q8 {
    public static void main(String[] args) {
        int[] nums = { 10, 20, 30, 40, 50 };
        int target = 30;
        for (int i : nums) {
            if (target == i) {
                System.out.println( i );
                break;
            }
        }
    }
}
