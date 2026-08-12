
public class Test {
    public static void main(String[] args) {
        Pattern1(6);
    }

    // *****
    // *****
    // *****
    // *****
    // *****
    static void Pattern1(int n) {
        for (int row = 0; row < n; row++) {
            for (int col = 0; col < n; col++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

}
