// WAP to copy all elements of one 2D array into another 2D array.

import java.util.Arrays;

public class Q2 {
    public static void main(String[] args) {
        int[][] nums = { { 1, 2, 3 }, { 8, 6, 4 } };
        int[][] result = new int[nums.length][nums[0].length];

        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < nums[i].length; j++) {
                result[i][j] = nums[i][j];
            }
        }
        for (int i = 0; i < result.length; i++) {
            for (int j = 0; j < result[i].length; j++) {
                System.out.println(result[i][j]);
            }
        }
    }
}
