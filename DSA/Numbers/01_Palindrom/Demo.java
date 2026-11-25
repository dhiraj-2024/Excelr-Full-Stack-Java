// ! x = 12321 

public class Demo {

    public static boolean isPalindrome(int x) {

        // Negative numbers are not palindromes
        // Numbers ending in 0 are not palindromes (except 0)
        if (x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }

        int reverseHalf = 0;
        while (x > reverseHalf) {
            int digit = x % 10;
            reverseHalf = reverseHalf * 10 + digit;
            x /= 10;
        }

        return x == reverseHalf ||
                x == reverseHalf / 10;

    }
    public static void main(String[] args) {
        
        int x = 0;
        System.out.println(isPalindrome(x));
    }
}
