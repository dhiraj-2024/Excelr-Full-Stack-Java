// WAP to reverse the elements of a given array.

import java.util.Arrays;

public class Q12 {
    public static void main(String[] args) {
        int[] nums = { 2, 4, 6, 8, 3, 1, 3, 9 };
        int l = 0;
        int r = nums.length - 1;

        while (l <= r) {
            int temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            l++;
            r--;
        }
        System.out.println(Arrays.toString(nums));
    }
}
