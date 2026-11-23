// P001 Swap Two Numbers Without a Temporary Variable
// Concept: Arithmetic / XOR tricks, variable assignment
// Input : a = 5, b = 9
// Output: a = 9, b = 5

public class P001_SwapWithoutTemp {

    // Method 1: Arithmetic (pack with +, unpack with -)
    static void swapArithmetic(int a, int b) {
        System.out.println("Arithmetic method");
        System.out.println("  Before: a = " + a + ", b = " + b);

        a = a + b; // a holds the total
        b = a - b; // total - b = old a
        a = a - b; // total - old a = old b

        System.out.println("  After : a = " + a + ", b = " + b);
    }

    // Method 2: XOR (x ^ x = 0, x ^ 0 = x)
    static void swapXor(int a, int b) {
        System.out.println("XOR method");
        System.out.println("  Before: a = " + a + ", b = " + b);

        a = a ^ b; // a holds both "locked together"
        b = a ^ b; // (a^b)^b = old a
        a = a ^ b; // (a^b)^old a = old b

        System.out.println("  After : a = " + a + ", b = " + b);
    }

    // Overflow demo: the sum doesn't fit in an int
    static void overflowDemo() {
        int a = 2_000_000_000, b = 1_000_000_000;
        System.out.println("Overflow demo (Integer.MAX_VALUE = " + Integer.MAX_VALUE + ")");
        System.out.println("  Before: a = " + a + ", b = " + b);

        a = a + b; // overflows: 3,000,000,000 doesn't fit in an int
        System.out.println("  After a = a + b -> a = " + a + "  (overflowed!)");
        b = a - b;
        a = a - b;

        // Java int arithmetic wraps around, so the swap still ends correctly
        System.out.println("  After : a = " + a + ", b = " + b + "  (still correct in Java)");
    }

    // Array trap: swapping an element with itself
    static void xorSwapArray(int[] arr, int i, int j) {
        if (i == j)
            return; // without this check, arr[i] would become 0
        arr[i] = arr[i] ^ arr[j];
        arr[j] = arr[i] ^ arr[j];
        arr[i] = arr[i] ^ arr[j];
    }

    public static void main(String[] args) {
        int a = 5, b = 9;

        swapArithmetic(a, b);
        System.out.println();

        swapXor(a, b);
        System.out.println();

        overflowDemo();
        System.out.println();

        int[] arr = { 7, 3 };
        xorSwapArray(arr, 0, 0); // same index: safely does nothing
        xorSwapArray(arr, 0, 1);
        System.out.println("Array swap: arr = [" + arr[0] + ", " + arr[1] + "]");
    }
}
