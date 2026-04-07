interface B {
   int x = 10;

    void fun1();
}

interface C extends B {
    int y = 20;

   static void fun2(){
    System.out.println("Hello this is interface function 2");
    };

}

class D implements C {
    public void fun1() {

    }

    void display() {
        System.out.println(x);
        System.out.println(y);
    }
}

public class A {
    public static void main(String[] args) {
        D obj1 = new D();
        obj1.display();
        C.fun2();
    

    }
}
