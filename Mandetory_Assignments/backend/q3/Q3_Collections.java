
// Q3_Collections.java
import java.util.*;

public class Q3_Collections {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        ArrayList<String> list = new ArrayList<>();
        HashSet<String> set = new HashSet<>();

        System.out.println("1. List  2. Set");
        int type = sc.nextInt();
        sc.nextLine();

        if (type == 1) {
            System.out.println("1.Add 2.Remove 3.Display");
            int ch = sc.nextInt();
            sc.nextLine();

            if (ch == 1) {
                System.out.println("Enter element:");
                String e = sc.nextLine();
                list.add(e);
            } else if (ch == 2) {
                System.out.println("Enter element:");
                String e = sc.nextLine();
                list.remove(e);
            } else if (ch == 3) {
                System.out.println(list);
            }
        }

        else if (type == 2) {
            System.out.println("1.Add 2.Remove 3.Display");
            int ch = sc.nextInt();
            sc.nextLine();

            if (ch == 1) {
                System.out.println("Enter element:");
                String e = sc.nextLine();
                set.add(e);
            } else if (ch == 2) {
                System.out.println("Enter element:");
                String e = sc.nextLine();
                set.remove(e);
            } else if (ch == 3) {
                System.out.println(set);
            }
        }

        sc.close();
    }
}