
public class Main {
    public static void main(String[] args) {
        int[] nums = { 1, 2, 3, 4, 5, 6, 7 };
        int target = 6;

        for (int i = 0; i < nums.length; i++) {
            for (int k = i+1; k < nums.length; k++) {
                if (nums[i] + nums[k] == target ) {
                    System.out.println(nums[i] + "and "+ nums[k]);
                }
            }
        }
        
    }
}
