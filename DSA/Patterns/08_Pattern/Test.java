
public class Test {
    public static void main(String[] args) {
Pattern8(3);
    }

    static void Pattern8(int n) {
        for (int i = 0; i <= 2* n; i++) {
            // int totalCol = i < n ? i : 2 * n - i;
            for (int j = 0; j <= 2 * n; j++) {
                System.out.print("* ");
            }
            for (int j = 0; j <= 2*n; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
