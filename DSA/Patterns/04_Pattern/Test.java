

public class Test {
    public static void main(String[] args) {
        Pattern(6);
    }
// *     *
// **   **
// *** ***
// *******
// *** ***
// **   **
// *     *
    
    static void Pattern(int n) {
        for (int i = 1; i <= 2*n; i++) {
            for (int j = 1; j < 2 * n; j++) {
                if((i>=j && i+j <= n*2)||(j>=i && i+j >= n*2)){
                    System.out.print("*");
                }else{
                    System.out.print(" ");
                }
                // System.out.print(i+""+j+" ");
            }
            System.out.println();
        }
    }
}
