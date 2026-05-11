
import java.util.Scanner;
public class Productofdigits {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter Number :");
        int num = s.nextInt();
        int product = 1;

        if (num == 0) {
            product = 0;
            System.out.println("product of the digits are : " + product);
        } else {
            while (num > 0) {
                int digit = num % 10;
                product = product * digit;
                num /= 10;
            }
            System.out.println("product of the digits are : " + product);
        }
    }
}
