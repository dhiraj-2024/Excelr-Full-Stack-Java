import java.util.Arrays;
public class Main {
    
    public static void main(String[] args) {
        int[] a1 = { 1, 3, 5};
        int[] a2 = { 2, 4, 6};
        int[] result = new int[Math.min(a1.length, a2.length)];
        int k = 0;
        for (int i = 0; i < a1.length; i++) {
            boolean found = false;
            for (int j = 0; j < a2.length; j++) {
                if (a1[i] == a2[j]) {
                    found = true;
                    break;
                }
            }
            if (found) {
                boolean alreadyExist = false;
                for (int j = 0; j <= k; j++) {
                    if (result[j] == a1[i]) {
                        alreadyExist = true;
                        break;
                    }
                }
                if (!alreadyExist) {
                    result[k] = a1[i];
                    k++;
                }
            }
        }
        System.out.println(Arrays.toString(Arrays.copyOf(result, k)));
    }
}
