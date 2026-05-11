// SUM OF DIGITS 

import java.util.Scanner;
public class SumofDigits {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter number : ");
        int num = s.nextInt();
        int sum = 0;

        while (num > 0) {
            int digit = num % 10;
            sum = sum + digit;
            num /= 10;

        }
        System.out.println("The sum of digits are : " + sum);

    }
}
