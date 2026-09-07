class Employee {
    private int a = 10;
    int b = 20;
    protected int c = 30;
    public int d = 40;
}

class Test extends Employee {
    
}

public class Main {
    public static void main(String[] args) {
        Test t1 = new Test();
        // System.out.println(t1.a);
        System.out.println(t1.b);
        System.out.println(t1.c);
        System.out.println(t1.d);
    }
}
