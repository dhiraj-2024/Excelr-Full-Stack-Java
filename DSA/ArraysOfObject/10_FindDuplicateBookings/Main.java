

public class Main {
    public static void main(String[] args) {
        int[] nums = { 10, 25, 30, 45, 25, 60,10 };
        boolean found = false;
        int duplicate = 0;
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    found = true;
                    duplicate = nums[i];
                    break;
                }
            }
            if (found) {
                break;
            }
        }
        System.out.println(duplicate);
    }
}
