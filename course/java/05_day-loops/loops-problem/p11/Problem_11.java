// COUNT AND PRINT THE TOTAL NUMBER OF DIGITS IN THE GIVEN NUMBER   

public class Problem_11 {
    public static void main(String[] args) {
        int num = 1223456334;
        int count = 0;
        
        while (num > 0) {
            num = num / 10;
            count++;
        }
        System.out.println(count);
    }
}
