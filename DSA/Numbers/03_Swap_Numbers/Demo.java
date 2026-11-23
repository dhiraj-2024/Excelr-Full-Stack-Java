public class Demo {
    // Method 1 : usging Arithmetic 
    static void swapArith(int a, int b) {
        System.out.println("Arithmetic Method");
        System.out.println("Before :" + "a :" + a + ", b :" + b);
        a = a + b;
        b = a - b;
        a = a - b;
        System.out.println("After :" + "a :" + a + ", b :" + b);
    }

    // Method 2 : Using XOR
    static void swapXor(int a, int b) {
        System.out.println("XOR Method");
        System.out.println("Before :" + "a :" + a + ", b :" + b);
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;
        System.out.println("After :" + "a :" + a + ", b :" + b);

    }

    public static void main(String args[]) {
        swapArith(4, 9);
        swapXor(3, 5);
    }
}




