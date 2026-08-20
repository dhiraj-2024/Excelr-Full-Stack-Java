
public class Test {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5 };
        int n = arr.length;
        int currentSum = 0;

        for (int i = 0; i < n; i++) {
            int currentElement = arr[i];
            currentSum += currentElement;
            if (currentSum < arr[i]) {
                currentSum = arr[i];
            }
            arr[i] = currentSum;

        }
        for (int i : arr) {
            System.out.println(i);
        }

    }
}
