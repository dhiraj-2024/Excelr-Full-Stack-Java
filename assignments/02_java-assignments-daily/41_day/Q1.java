// write a java program to calculate the factorial of the number

public class Q1 {
    public static void main(String[] args) {
        int num = 5;
        int factorial_sum = 1;
        for (int i = 1; i <= num; i++) {
            factorial_sum *= i;
        }
        System.out.println(factorial_sum);
    }
}
/*
1 2 3 4
*/