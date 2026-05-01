// CHECK WETHER THE GIVEN NUMBER IS PELINDROME  123321

public class Problem_13 {
    public static void main(String[] args) {

        int num = 1233321;
        int orignal_num = num;
        int rev = 0;
        while (num > 0) {
            int digit = num % 10;
            rev = rev * 10 + digit;
            num = num / 10;
        }
        if (orignal_num != rev) {
            System.out.println("The given number " + orignal_num + " is not  pelindrome");
        } else {
            System.out.println("The given number " + orignal_num + " is pelindrome");
        }
        
    }
}
