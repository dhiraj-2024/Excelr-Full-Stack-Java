import java.util.Arrays;

public class Move2 {
    public static void main(String[] args) {
        int[] a = { 1, 0, 45, 23, 0, 7, 5, 9, 0, 99 };
        int write = 0;
        for (int read = 0; read < a.length; read++) {
            if (a[read] != 0) {
                a[write] = a[read];
                write++;
            }
        }

        while (write < a.length) {
            a[write] = 0;
            write++;
        }

        System.out.println(Arrays.toString(a));
    }
}
