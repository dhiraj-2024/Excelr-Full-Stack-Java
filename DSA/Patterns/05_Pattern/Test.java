
public class Test {
    public static void main(String[] args) {
        Pattern05(5);
    }

    static void Pattern05(int n) {
        for (int i = 1; i <= 2 * n; i++) {
            int totalColumn = i < n ? i : 2 * n - i;
            for (int j = 1; j <= totalColumn; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}