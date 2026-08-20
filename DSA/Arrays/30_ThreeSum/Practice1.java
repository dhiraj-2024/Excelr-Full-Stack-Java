// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

import java.util.Arrays;

public class Practice1 {
    public static void main(String[] args) {
        int[] nums = { -1, 0, 1, 2, -1, -4 };
        Arrays.sort(nums);
        for (int i = 0; i < nums.length-2; i++) {
            int left = i + 1;
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            int right = nums.length - 1;
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                if (sum == 0) {
                    System.out.println(
                            "[" + nums[i] + ", "
                                    + nums[left] + ", "
                                    + nums[right] + "]");
                left++;
                right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
                
            }
        }
    }
}
