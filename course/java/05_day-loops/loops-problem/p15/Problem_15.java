// CHECK WETHER THE GIVEN NUMBER IS ARMSTRONG NUMBER 
public class Problem_15 {
    public static void main(String[] args) {
        int num = 153;
        int temp = num;
        int sum = 0;
        int count = 0;
        while (temp > 0) {
            count++;
            temp /= 10;

        }
        temp = num;
        while (temp > 0) {
            int digit = temp % 10;
            sum += Math.pow(digit, count);
            temp /= 10;

            
        }
        System.out.println(count);


        if (sum == num) {
            System.out.println(" the given numbere is Armstrong number");
        } else {
            System.out.println("the number is not armstrong");

        }
    }
}
