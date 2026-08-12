import java.util.Arrays;
// Merge two sorted array
public class Main {
    public static void main(String[] args) {
        int[] arr1 = { 1, 4, 7};
        int[] arr2 = { 2, 3, 5 };
        int[] result = new int[arr1.length + arr2.length];
        int i = 0;
        int j = 0;
        // int k = 0;

        for (int k = 0; k < result.length; k += 2) {
            if (arr1[i] < arr2[j]) {
                result[k] = arr1[i];
                i++;
            } else {
                result[k] = arr2[j];
                j++;
                
            }
        }
        
        System.out.println(Arrays.toString(result));

    }
}
