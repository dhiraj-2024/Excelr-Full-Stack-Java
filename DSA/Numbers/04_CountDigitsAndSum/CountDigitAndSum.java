import java.util.Arrays;

public class CountDigitAndSum {
    static int[] countDigit(int n) {
        if (n == 0) {
            return  new int[]{1,0};
        }
        int sum = 0;
        int count = 0;

        while (n > 0) {
            sum += n % 10;
            n /= 10;
            count++;
        }
        return new int[] { count, sum };

    }
    public static void main(String[] args) {
System.out.println(Arrays.toString(countDigit(94334)));
    }
}
