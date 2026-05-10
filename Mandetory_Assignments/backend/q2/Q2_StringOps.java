
// Q2_StringOps.java
import java.util.Scanner;

public class Q2_StringOps {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a string:");
        String str = sc.nextLine();

        System.out.println("1. Extract Substring");
        System.out.println("2. Split Sentence");
        int choice = sc.nextInt();
        sc.nextLine();

        if (choice == 1) {
            System.out.println("Enter start index:");
            int s = sc.nextInt();
            System.out.println("Enter end index:");
            int e = sc.nextInt();

            System.out.println("Substring: " + str.substring(s, e));
        }

        else if (choice == 2) {
            String[] words = str.split(" ");

            System.out.println("Words:");
            for (String w : words) {
                System.out.println(w);
            }
        }

        sc.close();
    }
}