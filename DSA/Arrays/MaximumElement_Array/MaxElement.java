public class MaxElement {
    public static void main(String[] args) {
        int[] arr = { 14, 2, 45, 56, 7, 9, 35 };
        int max = arr[0];
        int min = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
            if (arr[i] < min) {
                min = arr[i];
            }
        }

        System.out.println("Max Element is : " + max);
        System.out.println("Min Element is : " + min);
    }
}
