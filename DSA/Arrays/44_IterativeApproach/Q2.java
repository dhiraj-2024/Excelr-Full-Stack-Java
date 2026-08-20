// WAP to Merge Two Arrays into One

public class Q2 {
    public static void main(String[] args) {
        int[] arr1 = { 1, 2, 3, 4 };
        int[] arr2 = { 5, 6, 7, 8 };
        int[] result = new int[arr1.length + arr2.length];


        for (int i = 0; i < arr1.length; i++) {
            result[i] = arr1[i];
        }
        for (int i = 0; i < arr1.length; i++) {
            result[arr1.length + i] = arr2[i];
        }

        for (int i : result) {
            System.out.println(i);
        }
    }
}
