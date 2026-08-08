import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[] nums = { 1, 3, 2, 4, 7, 2, 1, 5 };
       
        int n = nums.length;
        // sort array 
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[j] < nums[i]) {
                    int temp = nums[j];
                    nums[j] = nums[i];
                    nums[i] = temp;
            }
         }
        }
        System.out.println(Arrays.toString(nums));

        // find duplicate 
        // [1, 1, 2, 2, 3, 4, 5, 7]
        // int[] temp = new int[nums.length];
        int unique = 1;
        for (int i = 1; i < n; i++) {
            if (nums[i] != nums[i - 1]) {
                nums[unique] = nums[i];
                unique++;
            }
        }
        for (int i = 0; i < unique; i++) {
            System.out.println(nums[i]);
        }

    }
}
