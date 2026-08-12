
public class Test {
    public static void main(String[] args) {
        Pattern6(5);
    }
//     *
//    **
//   ***
//  ****
// *****
    static void Pattern6(int n) {
        for (int i = 1; i <= n; i++) {

            // Print spaces
            for (int j = 0; j < n - i; j++) {
                System.out.print(" ");
            }
            // Print stars
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }

            System.out.println();
        }
    }
}
