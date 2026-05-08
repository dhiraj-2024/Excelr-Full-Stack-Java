// INCREASING Trangle program 

public class Problem3 {
    public static void main(String[] args) {
        // INCREASING Trangle program
        int num = 5;
        for (int i = 1; i <= num; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("$ ");
            }
            System.out.println();
        }

        // DECREASING Trangle program

        int row = 5;
        for (int k = 1; k <= row; k++) {
            for (int l = k; l <= row; l++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

   

}


/*
k = 1   l = k = 1    * * * * * 
k = 2   l = k = 2    * * * * 
k = 3   l = k = 3    * * * 
k = 4   l = k = 4    * *
k = 5   l = k = 5    *

*/