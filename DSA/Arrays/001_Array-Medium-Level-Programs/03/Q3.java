
// WAP to add two given matrices.

import java.util.Arrays;

public class Q3 {
    public static void main(String[] args) {
        int[][] matrix1 = {
                { 1, 2, 3 },
                { 3, 2, 1 }
        };
            
        int[][] matrix2 = {
                { 4, 5, 8 },
                { 1, 3, 7 }
        };
        int[][] result = new int[matrix1.length][matrix1[0].length];


        for (int i = 0; i < matrix1.length; i++) {
            for (int j = 0; j < matrix1[i].length; j++) {
                result[i][j] = matrix1[i][j] + matrix2[i][j];
            }
        }

       for (int[] is : result) {
        System.out.println(Arrays.toString(is));
       }
       
    }
}
