
public class Main {
    public static void main(String[] args) {
        int[] nums = { 10, 20, 30, 40, 50 };
        int target = 30;
        int temp = 0;
        for (int i = 0; i < nums.length; i++) {
            if (target == nums[i]) {
                System.out.println("index is : " + i);
                temp++;
            }
        }
        if (temp == 0) {
            System.out.println(-1);
        }
    }
}
