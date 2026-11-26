

public class Move1 {
    public static void main(String[] args) {
        int[] a = { 2, 65, 87, 34, 69, 49, 18, 99, 38 };

        // ! find max value in given array
        int maxValue = Integer.MIN_VALUE;
        for (int x : a) {
            maxValue = Math.max(maxValue, x);
        }
        System.out.println("Max value is : " + maxValue);

        // ! find min value in given array
        
        int minValue = Integer.MAX_VALUE;
        for (int x : a) {
            minValue = Math.min(minValue, x);
        }
        System.out.println("Min Value is : " + minValue);

        // ! count Total Sum

        int totalSum = 0;
        for (int x : a) {
            totalSum += x;
        }
        System.out.println("Total sum is : " + totalSum);
    }
}
