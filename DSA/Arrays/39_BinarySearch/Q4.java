// Find the Index of the Smallest Element Greater Than the Target

public class Q4 {
    public static void main(String[] args) {
        
        int[] nums = { 1, 2, 4, 6, 10, 20,88};
        int target = 5;
        int start = 0;
        int end = nums.length - 1;
        int ans = -1;
        while (start <= end) {
            int mid = (start + end) / 2;
            if (target < nums[mid]) {
                ans = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        System.out.println(ans);
    }
}
