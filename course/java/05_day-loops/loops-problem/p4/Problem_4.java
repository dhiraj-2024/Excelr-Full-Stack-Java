// PRINT ALL ODD NUMBERS BETWEEN 1 TO 100

public class Problem_4 {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 100) {
            if (i % 2 != 0) {
                System.out.println(i);
            }
            i++;
        }
    }
    
}
