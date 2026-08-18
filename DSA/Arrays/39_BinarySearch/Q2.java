// Find last Occurrence of an Element in a Sorted Array with Duplicates

public class Q2 {
    public static void main(String[] args) {
        int[] nums = { 1, 2, 2, 2, 3, 4,4, 5 };
        int target = 4;
        int left = 0;
        int right = nums.length - 1;
        int position = -1;

        while (left <= right) {
            int mid = (left + right) / 2;
            if (target == nums[mid]) {
                position = mid;
                left = mid + 1;
            } else if (target < nums[mid]) {
                right = mid - 1;
            } else {
                left = left + 1;
            }
        }
        System.out.println(position);
    }
}
