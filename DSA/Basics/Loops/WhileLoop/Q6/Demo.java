
import java.util.Scanner;
public class Demo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your Number...");
        int n = sc.nextInt();
        int factorialSum = 1;
        int i = 1;
        while (i <= n) {
            factorialSum *= i;
            i++;
        }
        System.out.println(factorialSum);
        sc.close();

    }
}
