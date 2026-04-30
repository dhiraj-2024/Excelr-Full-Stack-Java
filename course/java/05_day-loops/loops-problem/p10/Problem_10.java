// CALCULATE AND PRINT THE FACTORIAL OF THE GIVEN NUMBER

public class Problem_10 {
    public static void main (String [] args)
    {
        int i = 1;
        int n = 4;
        int fsum = 1;
        while (i <= n) {
            fsum *= i;
            i++;

        }
        System.out.println( fsum);
    }

}
