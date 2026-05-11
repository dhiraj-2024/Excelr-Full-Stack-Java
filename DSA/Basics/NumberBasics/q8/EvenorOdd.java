// CHECK NUMBER EVEN OR ODD
import java.util.Scanner;
public class EvenorOdd {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter Number : ");
        int num = s.nextInt();

        if (num % 2 == 0) {
            System.out.println("the number is even : " + num);
        } else {
            System.out.println("the number is odd : " + num);
        }
        s.close();
    }
}
