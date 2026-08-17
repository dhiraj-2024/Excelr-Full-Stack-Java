

public class BinarySearch {
    public static void main(String[] args) {
        int[] nums = {2, 5, 8, 12, 15, 19, 115, 120, 125 };

        int target =115;
        int left = 0;
        int right = nums.length - 1;
        boolean found = false;

        while (left <= right) {
            int mid = left + (right-left) / 2;

            if (target == nums[mid]) {
                System.out.println(mid);
                found = true;
                break;
            } else if (target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        if (!found) {
            System.out.println(-1);
        }
    }
}
