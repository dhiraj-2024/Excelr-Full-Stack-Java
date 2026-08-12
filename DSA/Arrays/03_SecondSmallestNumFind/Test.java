

public class Test {
    public static void main(String[] args) {
        int[] nums = { 45, 12, 67, 23, 89, 34 }; // teste case 1
        // int[] nums = { 5, 20, 10, 15, 30 };  // teste case 2
        // int[] nums = { -10, -20, -5, -30, -15 };  // teste case 3
        // int[] nums = { 5, 5, 10, 20, 30 }; // teste case 4
        // int[] nums = { 10, -5, 30, -20, 40, 0 };  // teste case 5
        // int[] nums = { Integer.MAX_VALUE, 200, -100, 50, -200, 0, -100 }; // teste case 6
        // int[] nums = { 10 }; // teste case 7
        // int[] nums = { 5, 5, 5, 5 }; // teste case 8 
        // int[] nums = { -5, -5 }; // teste case 9

        if (nums.length < 2) {
            System.out.println("no smallest number");
        } else {
            
            int first = Integer.MAX_VALUE;
            int second = Integer.MAX_VALUE;

            for (int num : nums) {
                if (num < first) {
                    second = first;
                    first = num;
                } else if (num < second && num != first) {
                    second = num;
                }
            }
            if (second == Integer.MAX_VALUE) {
                System.out.println("no smallest number");
            } else {
                System.out.println("first smallest :" + first);
                System.out.println("second smallest :" + second);
            }
            
        }
        
    
    }
}
