

public class Demo1 {
    
    public static long factorial(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        long result = 1;
        for (int i = 1; i <= n; i++) {
            result = result * i;
        }
        return result;
    }

    public static long factorialRecursion(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }

        return n * factorialRecursion(n - 1);
    }
    public static void main(String[] args) {
        System.out.println(factorial(5));
        System.out.println(factorialRecursion(5));
    }
}
