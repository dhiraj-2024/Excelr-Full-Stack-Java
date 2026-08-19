// WAP to copy the contents of one array into another array.

class Q6 {
    public static void main(String[] args) {
        int[] nums = { 80, 59, 78, 95, 45 };
        int[] marks = new int[nums.length];
        int j = 0;
        for (int i : nums) {
            marks[j] = i;
            j++;
        }
        for (int i : marks) {
            System.out.println(i);
        }
    }
}