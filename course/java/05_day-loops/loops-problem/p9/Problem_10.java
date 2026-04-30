// FIND AND PRINT THE PRODUCT OF ALL DIGITS OF THE GIVEN NUMBER

public class Problem_10 {
    public static void main(String[] args) {
        
        int n =113032;
        int product = 1;
        while (n > 0) {
            int digit = n % 10;
            if (digit != 0) {
                product *= digit;
            }
            n /= 10;
        }
        System.out.println(product);

    }
}
