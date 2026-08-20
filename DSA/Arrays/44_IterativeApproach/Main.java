// WAP to find the maximum and minimum element in an array

public class Main {
    public static void main(String[] args) {
        int[] arr = { 4, 7, 1, 3, 6 };
        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;
        for (int i = 0; i < arr.length; i++) {

            if (arr[i] > max) {
                max = arr[i];
            }
        }
        System.out.println(max);

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        System.out.println(min);

    }
}
