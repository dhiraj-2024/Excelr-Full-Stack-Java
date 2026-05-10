// Check the given year is leap or not
import java.util.Scanner;

public class Q5 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter Year :");
        int year = s.nextInt();
       
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))  {
                System.out.println(year + " is Leap year");
        
        }
        else {
            System.out.println(year + " is NOT a Leap year");
        }
    }

}
