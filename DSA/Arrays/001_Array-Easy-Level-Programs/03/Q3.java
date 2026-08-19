// WAP to calculate the sum of even and odd numbers separately in a given array.

public class Q3 {
    public static void main(String[] args) {
        int[] nums = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        int esum = 0;
        int osum = 0;

        for (int i : nums) {
            if (i % 2 == 0) {
                esum += i;
            } else {
                osum += i;
            }
        }
        System.out.println("even num sum :" + esum);
        System.out.println("odd num sum :" + osum);

    }
}
