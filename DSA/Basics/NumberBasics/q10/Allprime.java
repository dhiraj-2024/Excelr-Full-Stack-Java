
// CHECK THE ALL PRIME IN THE RANGE
import java.util.Scanner;

public class Allprime {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter range :");
        int range = s.nextInt();

        for (int i = 2; i <= range; i++) {
            boolean isPrime = true;
            for (int j = 2; j <= Math.sqrt(i); j++) {
                if (i % j == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                System.out.println(i);
            }
        }
        s.close();
        
    }
}
