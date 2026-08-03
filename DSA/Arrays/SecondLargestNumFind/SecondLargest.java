public class SecondLargest {
    public static void main(String[] args) {
        int[] nums = { 12, 45, 67, 23, 89, 34, 78 }; // teste case 1 

        int first = nums[0];
        int second = nums[0];

        for (int num : nums) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second) {
                second = num;
            }

        }
        
        System.out.println(first);
        System.out.println(second);
    }
}
