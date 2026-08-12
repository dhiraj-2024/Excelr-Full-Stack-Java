
public class Test {
    public static void main(String[] args) {
        Pattern2(5);
    }


    // *
    // **
    // ***
    // ****
    // *****
    static void Pattern2(int n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

}
