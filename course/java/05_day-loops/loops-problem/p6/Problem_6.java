// CALCULATE AND PRINT THE SUM OF FIRST N NATURAL NUMBER

public class Problem_6 {
    public static void main(String[] args) {
        int i = 0;
        int sum = 0;
        int n = 200;
        while (i <= n) {
            sum += i;
            i++;
        }
        System.out.println(sum);
    }
    
}
