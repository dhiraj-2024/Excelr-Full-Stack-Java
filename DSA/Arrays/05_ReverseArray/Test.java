import java.util.Arrays;
// public class Test {
//     public static void main(String[] args) {
//         int[] nums = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
//         for (int i = nums.length - 1; i >= 0; i--) {
//             System.out.println(i);
//         }
//     }
// }


// public class Test {
//     public static void main(String[] args) {
//         int[] nums = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };

//         int left = 0;
//         int right = nums.length - 1;

//         while (left < right) {

//             int temp = nums[left];
//             nums[left] = nums[right];
//             nums[right] = temp;

//             left++;
//             right--;

//         }
//         System.out.println(Arrays.toString(nums));
//     }
// }




class Test {
public static void main(String[] args) {
    int[] nums = { 10, 20, 30, 40, 50 };
    int[] reverseArray = new int[nums.length];
    int j = 0;

    for (int i = nums.length - 1; i >= 0; i--) {
        reverseArray[j] = nums[i];
        j++;
    }
    System.out.println(Arrays.toString(reverseArray));
}   
}