// CHECK THE NUMBER IS PALINDROM
public class Q3 {
    public static void main(String[] args) {
        int num = 123321;
        int temp = num;
        int rev = 0;

        while (num > 0) {
            int digit = num % 10;  
            rev = rev * 10 + digit;
            num /= 10;

        }
        if (rev == temp) {
            System.out.println("palindrom");
        } else {
            System.out.println("not palindrom");
        }

    }

}
