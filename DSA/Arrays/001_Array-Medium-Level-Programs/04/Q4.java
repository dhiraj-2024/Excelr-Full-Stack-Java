// WAP to subtract one matrix from another given matrix.

import java.util.Arrays;

public class Q4 {
    public static void main(String[] args)
    {
        int[][] matrix1 = {
                { 1, 2, 3 },
                { 3, 2, 1 }
        };

        int[][] matrix2 = {
                { 4, 5, 8 },
                { 1, 3, 7 }
        };
        int[][] SubMatrix = new int[matrix1.length][matrix1[0].length];

        for (int i = 0; i < matrix1.length; i++) {
            for (int j = 0; j < matrix1[i].length; j++) {
                SubMatrix[i][j] = matrix2[i][j] - matrix1[i][j];
            }
        }

        for (int[] is : SubMatrix) {
            System.out.println(Arrays.toString(is));
        }
    }
}
