// WAP to count the number of positive, negative, and zero elements in a given array.

public class Q4 {
    public static void main(String[] args) {
        int[] nums = { 1, 2,-4,0,-9, 3, 4, 5, 6,-12,0, 7, 8, 9,0 };
        int pnum = 0;
        int nnum = 0;
        int zeros = 0;
        for (int i : nums) {
            if (i > 0) {
                pnum++;
            } else if (i < 0) {
                nnum++;
            } else {
                zeros++;
            }
        }
        System.out.println("positive numbers : " + pnum);
        System.out.println("negative numbers : " + nnum);
        System.out.println("zeros  : " + zeros);
    }
}
