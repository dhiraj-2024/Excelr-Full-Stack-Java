// CALCULATE THE SUM OF ALL EVEN NUMBERS FROM 1 TO N 

public class Problem_7 {
    public static void main(String[] args) {
        int n = 530;
        int i = 1;
        int sum = 0;
        
        while (i <= n) {
            if (i % 2 == 0) {
                sum += i;
            }
            i++;
        }
        System.out.println(sum);
    }
}
