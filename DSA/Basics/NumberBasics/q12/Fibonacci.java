
// FABONACCI SERIES
public class Fibonacci {
    public static void main(String[] args) {
        int range = 100;
        int a = 0;
        int b = 1;
        System.out.println(a);
        System.out.println(b);
        for (int i = 3; i <= range; i++) {
            int next = a + b;
            System.out.println(next + " ");

            a = b;
            b = next;
        }
    }
    
}
