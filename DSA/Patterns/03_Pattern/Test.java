
public class Test {
    public static void main(String[] args) {
        Pattern3(5);
    }

    // *****
    // ****
    // ***
    // **
    // *
    static void Pattern3(int n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
