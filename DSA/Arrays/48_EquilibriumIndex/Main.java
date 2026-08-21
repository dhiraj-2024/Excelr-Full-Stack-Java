

public class Main {
    public static void main(String[] args) {
        int[] nums = { 1, 3, 5, 2, 2 };
        int n = nums.length;
        int Tsum = 0;
        for (int i = 0; i < n; i++) {
            Tsum += nums[i];
        }
        int leftSum = 0;
        for (int i = 0; i < n; i++) {
            int rightSum = Tsum - leftSum - nums[i];
            if (leftSum == rightSum) {
                System.out.println("equillibrium index is : " + i);
            }
            leftSum += nums[i];
            
        }
    }
}
