import  java.io.*;
import java.util.StringTokenizer;

public class Q1 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        int[] stockPrices = new int[n];

        for (int i = 0; i < n; i++) {
            stockPrices[i] = Integer.parseInt(st.nextToken());
        }
        // [2,5,7,1,8,9,3,4]
        int minPrice = Integer.MAX_VALUE;
        int bestProfit = 0;

        // for (int i = 0; i < n; i++) {
        //     minPrice = Math.min(minPrice, stockPrices[i]);
        //     int currentProfit = stockPrices[i] - minPrice;
        //     bestProfit = Math.max(bestProfit, currentProfit);
        // }

        for (int i = 0; i < n; i++) {
            minPrice = Math.min(minPrice, stockPrices[i]);
            int currentProfit = stockPrices[i] - minPrice;
            if (currentProfit > bestProfit) {
                bestProfit = currentProfit;
            }
        }

        System.out.println(bestProfit);

    }
}
