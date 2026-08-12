
public class Main {
    public static void main(String[] args) {
        int[] nums = { 88, 67, 90, 46, 69 };
        int n = nums.length;
        int sum = 0;
        for (int i = 0; i < n; i++) {
            sum += nums[i];
        }
        float avg = sum / n;
        System.out.println("Average of Array Elements is : " + avg);
    }
}
