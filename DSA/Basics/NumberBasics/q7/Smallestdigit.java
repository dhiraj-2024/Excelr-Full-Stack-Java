// SMALLEST DIGIT FIND

public class Smallestdigit {
    public static void main(String[] args) {
        int num = 4589;
        int min = 9;

        while (num > 0) {
            int digit = num % 10;
            if (digit <= min) {
                min = digit;
            }
            num /= 10;
        }
        System.out.println("Smallest Digit Is : " + min);
    }
}
