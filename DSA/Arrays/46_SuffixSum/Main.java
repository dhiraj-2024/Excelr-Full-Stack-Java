import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5 };
        int n = arr.length;
        int[] suffix = new int[n];
        suffix[n - 1] = arr[n - 1];
        
        for (int i = n-2; i >= 0; i--) {
            suffix[i] = arr[i] + suffix[i + 1];
        }
        System.out.println(Arrays.toString(suffix));
    }
}
