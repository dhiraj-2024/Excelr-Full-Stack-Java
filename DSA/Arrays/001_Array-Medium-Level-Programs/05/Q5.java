// WAP to compute the sum of the diagonals of a given matrix.

import java.util.Arrays;

public class Q5 {
    public static void main(String[] args) {
        int[][] matrix1 = {
                { 1, 2, 3 },
                { 3, 2, 1 },
                {6,7,8}
        };
        int sum = 0;

        for (int i = 0; i < matrix1.length; i++) {
            for (int j = 0; j < matrix1[i].length; j++) {
                if (i == j) {
                    sum += matrix1[i][j];
               }
            }
        }

        System.out.println(sum);
    }
}