public class Test {
    public static void main(String[] args) {
        int[] nums = { 1, 3, 1, 4, 1, 2, 6, 8, 2, 3, 1, 8 };
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
            System.out.println(nums[i] + ":" + count);
        }
    }
}
