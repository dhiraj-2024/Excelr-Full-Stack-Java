
// WAP to calculate the average of all elements in a given arra

public class Q5 {
    public static void main(String[] args) {
        int[] nums = { 80, 59, 78, 95, 45 };
        int sum = 0;
        for (int i : nums) {
            sum += i;
        }
        int avg = sum / nums.length;
        System.out.println("Average : " + avg);
    }
}
