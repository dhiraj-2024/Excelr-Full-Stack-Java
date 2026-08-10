

public class Main {
    public static void main(String[] args) {
        // int[] nums = { 2, 5, 4, 2, 5 };
        int[] nums = { 1, 2, 5, 1, 7, 2, 5, 1 };
        int n = nums.length;
        boolean[] visited = new boolean[n];
        for (int i = 0; i < n; i++) {
            if (visited[i]) {
                continue;
            }
            int count = 1;
            for (int j = i + 1; j < n; j++) {
                if (nums[j] == nums[i]) {
                    count++;
                    visited[j] = true;
                }
            }

            if (count == 1) {
                System.out.println(nums[i]);
            }
        }

    }
}
