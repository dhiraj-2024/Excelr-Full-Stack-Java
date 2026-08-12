

public class Test {
    public static void main(String[] args) {
        Pattern7(5);
    }
//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 
//  * * * * 
//   * * * 
//    * * 
//     * 
    
    static void Pattern7(int n) {
        for (int i = 1; i < n * 2; i++) {
            int spaces = i < n ? n - i : i - n;
            for (int j = 0; j < spaces; j++) {
                System.out.print(" ");
            }
            int col = i > n ? 2 * n - i : i;
            for (int j = 0; j < col; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }



}
