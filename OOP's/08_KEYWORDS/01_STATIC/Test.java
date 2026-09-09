

public class Test {

    int x = 10;
    static int y = 20;

    public static void main(String[] args) {

        Test t1 = new Test();
        Test t2 = new Test();

        t1.x = 100;
        t2.x = 200;

        t1.y = 300;
        t2.y = 400;

        System.out.println(t1.x);
        System.out.println(t2.x);
        System.out.println(t1.y);
        System.out.println(t2.y);
    }
} 
    

