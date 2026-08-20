
public class Main {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5 };
        int n = arr.length;
        int[] prefix = new int[n];

        prefix[0] = arr[0];
        for (int i = 1; i < n; i++) {
            prefix[i] = arr[i] + prefix[i - 1];
        }
        for (int i : prefix) {
            System.out.println(i);
        }
    }
}
