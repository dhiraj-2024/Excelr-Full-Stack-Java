// WAP to swap two elements in a given array at specified positions.

public class Q7 {
    public static void main(String[] args) {
        int[] nums = { 10, 20, 30, 40, 50 };
      int temp = nums[1];
      nums[1] = nums[3];
      nums[3] = temp;

      for (int i : nums) {
        System.out.println(i);
      }
    }
}
