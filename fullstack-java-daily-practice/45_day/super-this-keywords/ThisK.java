class Example {
    private int x;
    private int y;

    void fun1(int p, int q) {
        x = p;
        y = q;
    }
    
    void fun2(int x, int y) {
        this.x = x;
        this.y = y;
        // x = x;
        // y = y;
    }

    void displayFun1() {
        System.out.println(" this is fun1 x : " +x);
        System.out.println(" this is fun1 y : " +y);
    }
    
    void displayFun2() {
        System.out.println(" this is fun2 x : "+ x);
        System.out.println(" this is fun2 y : " + y);
    }
}

public class ThisK {
    public static void main(String[] args) {
        Example obj1 = new Example();
        obj1.displayFun1();
        obj1.fun1(2, 4);
        obj1.displayFun2();
        obj1.fun2(5, 10);

    }
    
}
