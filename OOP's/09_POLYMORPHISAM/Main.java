class Calculator {
    int add(int a, int b, int c) {
        return a + b + c;
    }

    int add(int b, int c) {
        return b + c;
    }

    int multiply(int a, int b) {
        return a * b;
    }

    int multiply(int a, int b, int c) {
        return a * b * c;
    }

    double multiply(double a, double b) {
        return a * b;
    }

    void work() {
        System.out.println("Calculator use for Simple Mathematical operations");
    }
}

class Casio extends Calculator {
    void work() {
        System.out.println("Casio use for complex Engineering Mathematical operations");

    }
}

public class Main {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println(c.add(22,45,76));
        System.out.println(c.add(45, 76));
        
        System.out.println(c.multiply(2, 5));
        System.out.println(c.multiply(2, 5, 10));
        System.out.println(c.multiply(2.5, 4.0));
        c.work();
        Casio cc = new Casio();
        cc.work();
    }

}
