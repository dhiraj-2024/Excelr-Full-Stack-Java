import java.util.Scanner;

public class SecondRunnerUp {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] scores = new int[n];
        for (int i = 0; i < n; i++) {
            scores[i] = sc.nextInt();
        }
        sc.close();
        
        // 12 35 1 10 34 1

        int first = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            if (scores[i] > first) {
                second = first;
                first = scores[i];
            } else if (scores[i] < first && scores[i] > second) {
                second = scores[i];
            }
        }
        System.out.println(second);
    }
}
