// count the number of occurance of target element in sorted array
public class Q3 {
    public static void main(String[] args) {
        int[] nums = { 1, 2, 2, 2, 3, 4, 4, 5 };
        int target = 4;

        int first = firstIndex(nums, target);
        int last = lastIndex(nums, target);

        int count = 0;
        if (first != -1) {
            count = last - first +1;
        }
        System.out.println(count);
        
    }
    
    static int lastIndex(int[] nums, int target) {
        int start = 0;
        int end = nums.length - 1;
        int position = -1;
        while (start <= end) {
            int mid = (start + end) / 2;
            if (target == nums[mid]) {
                position = mid;
                start = mid + 1;
            } else if (target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return position;
    }

    static int firstIndex(int[] nums, int target) {
        int start = 0;
        int end = nums.length - 1;
        int position = -1;
        while (start <= end) {
            int mid = (start + end) / 2;
            if (target == nums[mid]) {
                position = mid;
                end = mid - 1;
            } else if (target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return position;
    }
    
}
