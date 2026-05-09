// write java program that took the user input and print the table of the given number
import java.util.Scanner;

public class Q3 {
    public static void main(String[] args) {
        Scanner s1 = new Scanner(System.in);
        System.out.println("Enter a number to print Multiplication Table : ");
        int num = s1.nextInt();
        System.out.println("You Enter a : " + num);
        
        for (int i = 1; i <= 10; i++) {
            System.out.println(num + " * "+ i +": "+i*num);
        }


    }
}
