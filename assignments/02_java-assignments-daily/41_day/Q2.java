// write a program to check if a given number is prime

public class Q2 {
    public static void main(String[] args) {
        int num = 14;
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

        if (isPrime == true) {
            System.out.println("prime");
        } else {
            System.out.println("not prime");
        }
        
    }
}
