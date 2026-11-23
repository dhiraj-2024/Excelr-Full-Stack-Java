public class Demo1 {
    static int reverse(int n) {
        int rev = 0;
        while (n != 0) {
            int digit = n % 10; // take last digit
            n /= 10; // remove last digit from number

            if (rev > Integer.MAX_VALUE / 10 || rev == Integer.MAX_VALUE && digit > 7)
                ;
            if (rev < Integer.MIN_VALUE / 10 || rev == Integer.MIN_VALUE && digit < -8)
                ;
            rev = rev * 10 + digit;
        }
        return rev;
    }
    public static void main(String[] args) {
        System.out.println(reverse(54354));
        System.out.println(reverse(-393857));
        System.out.println(reverse(0));
    }
}