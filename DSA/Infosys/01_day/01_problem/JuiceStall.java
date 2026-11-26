import java.io.*;
import java.util.*;
public class JuiceStall {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter Total Orders : ");
        int n = Integer.parseInt(br.readLine().trim());
        System.out.println("Enter Order Sizes : ");
        StringTokenizer st = new StringTokenizer(br.readLine());

        long total = 0;
        for (int i = 1; i <= n; i++) {
            String orderSize = st.nextToken();
            int price;

            if (orderSize.equals("S"))
                price = 20;
            else if (orderSize.equals("M"))
                price = 30;
            else
                price = 50;

            if (i % 5 == 0) {
                price = Math.max(15, price - 10);
            }
            total += price;
        }
        System.out.println("Total Earning of the Day : " + total);
    }
}
