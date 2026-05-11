//  ARMSTRONG NUMBER
public class Armstrong {
    public static void main(String[] args) {
        int num = 768;
        int temp = num;
        int  sum = 0;
        while (num > 0) {
            // armstrong number : sum of cubes of all the digits of the given number is equal to the number : 
            // 12 = cube of 1 + cube of 2 = 12 like this
            int digit = num % 10;
            int cube = digit * digit * digit;
            sum += cube;
            num /= 10;
            // System.out.println(sum);
        }
        if (temp == sum) {
            System.out.println("the number is ARMSTRONG");
        } else {
            System.out.println("The number is not Armstrong");
        }
    }
}
