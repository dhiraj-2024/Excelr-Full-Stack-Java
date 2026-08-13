
import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
    int[] arr1 = {1, 2, 3, 4};
    int[] arr2 = { 3, 4, 5, 6 };
    int[] result = new int[arr1.length + arr2.length];
    int k = 0;
    for (int i = 0; i < arr1.length; i++) {
        boolean alreadyExist = false;

        for (int j = 0; j < k; j++) {
            if (result[j] == arr1[i]) {
                alreadyExist = true;
                break;
            }
        }
        if (!alreadyExist) {
            result[k] = arr1[i];
            k++;
        }
    }
    
    for (int i = 0; i < arr2.length; i++) {
        boolean alreadyExist = false;
        for (int j = 0; j < k; j++) {
            if (result[j] == arr2[i]) {
                alreadyExist = true;
                break;
            }
        }
        if (!alreadyExist) {
            result[k] = arr2[i];
            k++;
        }
    }
    System.out.println(Arrays.toString(Arrays.copyOf(result, k)));
    }
}
