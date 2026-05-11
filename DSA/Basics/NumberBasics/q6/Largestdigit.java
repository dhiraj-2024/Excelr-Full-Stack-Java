

public class Largestdigit {
    public static void main(String[] args) {
        int num = 549627;
        int lnum = 0 ;

        while (num > 0) {
            int digit = num % 10;

            if (digit > lnum) {
                lnum = digit;
            }
            num /= 10;
        }
        System.out.println(lnum);
    }
}
