// WAP to calculate the sum of all elements in a given 2D array.

public class Q1 {
    public static void main(String[] args) {
        int[][] nums = { { 1, 4, 6 }, { 4, 9, 6 }, { 3, 9, 2 } };
        int sum = 0;
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < nums[i].length; j++) {
                sum += nums[i][j];
            }
        }
        System.out.println(sum);
    }
}
