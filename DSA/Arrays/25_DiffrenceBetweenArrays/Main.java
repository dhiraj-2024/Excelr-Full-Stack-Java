import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[] num1 = { 10, 20, 30, 40 };
        int[] num2 = { 20, 40 };
        int[] result = new int[num1.length];
        int k = 0;
        for (int i = 0; i < num1.length; i++) {
            boolean found = false;
            for (int j = 0; j < num2.length; j++) {
                if (num1[i] == num2[j]) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                result[k] = num1[i];
                k++;
            }
        }
        System.out.println(Arrays.toString(Arrays.copyOf(result, k)));
    }
}
