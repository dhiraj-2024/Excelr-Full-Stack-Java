// REVERSE THE GIVEN NUMBER AND PRINT THE REVERSE VALUE 

public class Problem_12 {
    public static void main(String[] args) {
        int num = 24234;
        int rev = 0 ;
        while (num > 0) {
            int digit = num % 10;
            rev = rev * 10 + digit;
            num /= 10;
        }
        System.out.println(rev);
    }
}
/*

num = 24234
digit_1 = 4 ; 
14  




*/