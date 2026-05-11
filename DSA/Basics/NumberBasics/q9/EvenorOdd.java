
// CHECK PRIME OR NOT

import java.util.Scanner;

public class EvenorOdd {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter Number : ");
        int num = s.nextInt();
        boolean isPrime = true;

        if (num <= 1) {
            isPrime = false;
        } else {
            for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        
        if (isPrime) {
            System.out.println("prime");
        } else {
            System.out.println("not prime");
        }
        s.close();
    
    }
}
