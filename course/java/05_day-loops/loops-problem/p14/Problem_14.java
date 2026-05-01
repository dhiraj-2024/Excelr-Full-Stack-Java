// FIND AND PRINT THE SUM OF DIGITS OF THE GIVEN NUMBER 

public class Problem_14 {
    public static void main(String[] args) {
        int num = 24323;
        int reserve_num = num;
        int sum = 0;
        while (num > 0) {
            int digit = num % 10;
            sum += digit;
            num /= 10;
        }
        System.out.println("the total sum of the all digits of the  " + reserve_num + " is :" + sum);
    }
}
