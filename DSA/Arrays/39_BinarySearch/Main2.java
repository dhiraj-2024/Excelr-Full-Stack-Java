

public class Main2 {
public static void main(String[] args) {
    int[] nums = { 1, 3, 5, 7, 9, 11 };
    int target = 5;
    int mid = nums.length / 2;
    boolean find = false;

    if (target == nums[mid]) {
        System.out.println(mid);
        find = true;
    } else if (target < nums[mid]) {
        for (int i = 0; i < mid; i++) {
            if (target == nums[i]) {
                System.out.println(i);
                find = true;
            }
        }
    } else if (target > mid) {
        for (int i = mid; i < nums.length; i++) {
            if (target == nums[i]) {
                System.out.println(i);
                find = true;
            }
        }
    }
    if (!find) {
        System.out.println(-1);
    }
}
}
