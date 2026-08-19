// WAP to insert an element at a specified position in a given array.

import java.util.Arrays;

public class Q9 {
    public static void main(String[] args) {
        int[] nums = { 10, 20, 30, 40, 50 };
        int element = 100;
        int position = 2;
        int[] newArry = new int[nums.length + 1];
        for (int i = 0; i < nums.length; i++) {
            if (i < position) {
                newArry[i] = nums[i];
            } else if (i == position) {
                newArry[i] = element;
            } else {
                newArry[i] = nums[i - 1];
            }
        }
        System.out.println(Arrays.toString(newArry));
    }
}
