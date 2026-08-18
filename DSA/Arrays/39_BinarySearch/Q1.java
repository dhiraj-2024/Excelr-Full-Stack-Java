// Find First Occurrence of an Element in a Sorted Array with Duplicates

public class Q1 {
    public static void main(String[] args) {
        int[] nums = { 1, 2, 2, 2, 3, 4, 5 };
        int left = 0;
        int right = nums.length - 1;
        int target = 2;
        
        int answer = -1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (target == nums[mid]) {
                answer = mid;
                right = mid - 1;

            }else if (target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        System.out.println(answer);
    }
}
