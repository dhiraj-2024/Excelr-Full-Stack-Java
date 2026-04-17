

public class MultiDimentionalA {
    public static void main(String[] args) {
        int[][][] myArray = new int[3][3][4];
        
        myArray[0][0][0] = 4000;
        myArray[0][0][1] = 4000;
        myArray[0][0][2] = 4000;
        myArray[0][0][3] = 4000;

        myArray[0][1][0] = 4000;
        myArray[0][1][1] = 4000;
        myArray[0][1][2] = 4000;
        myArray[0][1][3] = 4000;

        myArray[0][2][0] = 4000;
        myArray[0][2][1] = 4000;
        myArray[0][2][2] = 4000;
        myArray[0][2][3] = 4000;

        myArray[1][0][0] = 1000;
        myArray[1][0][1] = 1000;
        myArray[1][0][2] = 1000;
        myArray[1][0][3] = 1000;

        myArray[1][1][0] = 1000;
        myArray[1][1][1] = 1000;
        myArray[1][1][2] = 1000;
        myArray[1][1][3] = 1000;

        myArray[1][2][0] = 1000;
        myArray[1][2][1] = 1000;
        myArray[1][2][2] = 1000;
        myArray[1][2][3] = 1000;


        myArray[2][0][0] = 2000;
        myArray[2][0][1] = 2000;
        myArray[2][0][2] = 2000;
        myArray[2][0][3] = 2000;

        myArray[2][1][0] = 2000;
        myArray[2][1][1] = 2000;
        myArray[2][1][2] = 2000;
        myArray[2][1][3] = 2000;

        myArray[2][2][0] = 2000;
        myArray[2][2][1] = 2000;
        myArray[2][2][2] = 2000;
        myArray[2][2][3] = 2000;


        for (int row = 0; row < myArray.length; row++) {
            for (int secrow = 0; secrow < myArray[row].length; secrow++) {
                for (int i = 0; i < myArray[row][secrow].length; i++) {
                    System.out.print(myArray[row][secrow][i] + " ");
                }
                System.out.println();
            }
        }
    }
}
