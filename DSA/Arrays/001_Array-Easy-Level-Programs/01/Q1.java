
// WAP to calculate the sum of all elements in a given array.
public class Q1 {
    public static void main(String[] args) {
        int[] nums = new int[3];
        nums[0] = 22;
        nums[1] = 12;
        nums[2] = 45;
        int sum = 0;
        for (int i : nums) {
            sum += i;
        }
        System.out.println(sum);
    }
}
