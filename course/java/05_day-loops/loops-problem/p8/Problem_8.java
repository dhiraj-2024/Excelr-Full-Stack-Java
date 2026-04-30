// CALCULATE THE SUM OF ALL ODD NUMBERS FROM 1 TO N 

public class Problem_8 {
    public static void main(String[] args) {
        int i = 1;
        int n = 15;
        int sum = 0;
        
        while (i <= n) {
            if (i % 2 != 0) {
                sum += i;
            }
            i++;

        }
        System.out.println("Sum of odd numbers in  1 to  "+ n +" is : "+sum);
    }
}
