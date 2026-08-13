

public class Main {
    public static void main(String[] args) {
        int[] nums = { 1, 2, 3, 4, 5 };
        int target = 9;

        for (int i = 0; i < nums.length; i++) {
            for (int j = i+1; j < nums.length; j++) {
                for (int k = j+1; k < nums.length; k++) {
                    int sum = nums[i] + nums[j] + nums[k];
                    if (sum == target) {
                        System.out.println(nums[i] +""+ nums[j] +""+ nums[k]);
                    }
                }
            }
        }
    }
}
