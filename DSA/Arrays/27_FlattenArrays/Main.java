import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[][] nums = {
                { 1, 2, 3 },
                { 4, 5, 6 },
                { 7, 8, 9 }
        };
        int total = 0;
        for (int i = 0; i < nums.length; i++) {
            total += nums[i].length;
        }


        int[] result = new int[total];
        int k = 0;
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < nums[i].length; j++) {
                result[k] = nums[i][j];
                k++;
            }
        }
        System.out.println(Arrays.toString(result));
    }
}