class Example {
    int x, y;
    
// same function name but diffrent parameters and arguments its function overloading

    void f1() {
        System.out.println(x);
        System.out.println(y);
    }
    void f1(int x) {
        System.out.println(x);
    }
    void f1(int x, int y) {
        System.out.println(x);
        System.out.println(y);
    }
}


public class Overloading {
    public static void main(String[] args) {
        Example e1 = new Example();
        e1.f1(20, 30);
        e1.f1(10);
        e1.f1();
}
}
