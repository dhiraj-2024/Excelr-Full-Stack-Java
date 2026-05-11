// PERFECT NUMBER
import java.util.Scanner;
public class Perfectnum {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter a number :");
        int num = s.nextInt();
        int sum = 0;

        //  num = 10 : divisors  = 1, 2, 5  addition of these divisors should be equal to this number;
        
        for (int i = 1; i < num; i++) {
            if (num % i == 0) {
                sum = sum + i;
            }
        }
        if (sum == num) {
            System.err.println("The given number is the Perfect number : " + num);
        } else {
            System.out.println("Not perfect");
        }
        s.close();
        
    }
}
