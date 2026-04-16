

public class MultidimentionalArray {
    public static void main(String[] args) {
        int[][] numbers = new int[3][3];

        numbers[0][0] = 10;
        numbers[0][1] = 20;
        numbers[0][2] = 30;

        numbers[1][0] = 40;
        numbers[1][1] = 50;
        numbers[1][2] = 60;

        numbers[2][0] = 70;
        numbers[2][1] = 80;
        numbers[2][2] = 90;


        System.out.println(numbers[0][1]);

        for (int row = 0; row < numbers.length; row++) {
            for (int col = 0; col < numbers[row].length; col++) {
                System.out.print(numbers[row][col]);
            }
            System.out.println();
        }
    }
}
