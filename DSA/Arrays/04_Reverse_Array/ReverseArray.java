


public class ReverseArray {

    static void ReverseArr(int[] ar) {
        
        int i = 0;
        int j = ar.length - 1;
        
        while (i < j) {
            int t = ar[i];
            ar[i] = ar[j];
            ar[j] = t;

            i++;
            j--;
        }

    }
    public static void main(String[] args) {
        int[] ar = { 2, 4, 8, 10, 12, 14, 16 };

        for (int i = 0; i < ar.length; i++) {
            System.out.println(ar[i] + " ");
        }
        ReverseArray.ReverseArr(ar);

        for (int i = 0; i < ar.length; i++) {
            System.out.print(ar[i] + " ");
        }
        
    }
}
