

public class Test2 {
    public static void main(String[] args) {
        // int[] nums = { 100, 45, 67, 89, 23, 12, 56 }; // teste case 2 : 
        // int[] nums = { -15, -2, -30, -8, -1, -20 }; // teste case 3 if negative numbers 
        // int[] nums = { 90, 45, 90, 30, 80, 80, 20 }; // duplicate numbers 
        // int[] nums = { -10, 50, 0, 75, -5, 60, 75 }; // mixed number 
        int[] nums = { Integer.MIN_VALUE, -100, 50, 200, 199, 200, 150 };
        int first = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;

        for (int num : nums) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num != first) {
                second = num;
            }
        }
        System.out.println(first);
        System.out.println(second);

    }
}
