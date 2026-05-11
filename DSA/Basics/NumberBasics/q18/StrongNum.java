// STRONG NUMBER 
public class StrongNum {
    public static void main(String[] args) {
        int num = 145;
        int orignal = num;
        int digit = 0;
        int total = 0;
        
        while (num > 0) {
            int factorial = 1;
            digit = num % 10;
            for (int i = 1; i <= digit; i++) {
                factorial = factorial * i;
            }
            total = total + factorial;
            num /= 10;
        }
        
        if (total == orignal) {
            System.out.println("Strong num ");
        }
        else {
            System.out.println("Not Strong");
        }
       
        
    }
}
