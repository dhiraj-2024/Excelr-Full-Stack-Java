
public class Q2 {
    public static void main(String[] args) {
        int num = 324983;
        while (num > 0) {
            int digit = num % 10;   // it gives the last digit 
            num /= 10; // everytime in loop it reduce the number by last digit 
            System.out.print(digit); // print the last digit 
        }
    }
}
