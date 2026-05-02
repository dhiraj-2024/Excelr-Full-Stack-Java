// PRINT ALL PRIME NUMBER BETWEEN 1 TO 100


public class Problem_17 {
    public static void main(String[] args) {

        int n = 2;

        while (n <= 100) {

            boolean isPrime = true;
            int i = 2;

            while (i <= Math.sqrt(n)) {
                if (n % i == 0) {
                    isPrime = false;
                    break;
                }
                i++;
            }

            if (isPrime) {
                System.out.print(n + " "); 
            }

            n++; 
        }
    }
}
