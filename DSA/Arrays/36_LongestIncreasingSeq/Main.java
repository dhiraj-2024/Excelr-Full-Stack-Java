

public class Main {
    public static void main(String[] args) {
        int[] nums = { 1, 2, 3, 4, 2, 4, 1, 6, 1 };
        int count = 1;
        int maxLength = 0;

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                count += 1;
            } else {
                count = 1;
            }
            if (count > maxLength) {
                maxLength = count;
            }
            
        }
        System.out.println(maxLength);
    }
}
