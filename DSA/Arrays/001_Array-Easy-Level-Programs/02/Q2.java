
// WAP to count the number of even and odd elements in a given array.

public class Q2 {
    public static void main(String[] args) {
        int[] nums = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        int evenCount = 0;
        int oddCount = 0;

        for (int i : nums) {
            if (i % 2 == 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
        System.out.println("even num :" + evenCount);
        System.out.println("odd num :" + oddCount);
    }
}
