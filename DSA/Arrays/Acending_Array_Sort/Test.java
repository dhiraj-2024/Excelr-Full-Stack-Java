import java.util.Arrays;
// Acending array sorting
class Test {
    public static void main(String[] args) {
        
        int[] nums = { 40, 23, 43, 2, 67, 3, 24, 12, 90 };
        
        for (int i = 0; i < nums.length - 1; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] > nums[j]) {
                    int temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                }
            }
        }
        System.out.println(Arrays.toString(nums));
    }
}