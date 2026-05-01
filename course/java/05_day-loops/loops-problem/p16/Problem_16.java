//  CHECK GIVEN NUMBER IS PERFECT NUMBER OR NOT

public class Problem_16 {
    public static void main(String[] args) {
        int n = 28;
        int i = 1;
        int sum = 0;
        while (i <= n / 2) {
            if (n % i == 0) {
                sum += i;
            }
            i++;
        }
        if (sum == n) {
            System.out.println("number is perfect");
        } else {
            System.out.println("number is not perfect");
        }
    }
}
