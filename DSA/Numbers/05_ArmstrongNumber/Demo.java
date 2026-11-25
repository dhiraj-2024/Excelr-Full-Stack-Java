

public class Demo {
    public static boolean isArmstrongNum(int x) {
        int count = 0;
        int temp = x;
        int n = x;
        while (n > 0) {
            n /= 10;
            count++;
        }
        int result = 0;
        while (temp > 0) {
            int digit = temp % 10;
            int powerDigit = (int) Math.pow(digit, count);
            result += powerDigit;
            temp /= 10;
        }
        return x == result; 
        
    }
    public static void main(String[] args) {
        System.out.println(isArmstrongNum(15343));
    }
}
