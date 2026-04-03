class anotherClass {
    int x;
    int y;

    void area() {
        System.out.println("this is area");
    }
    
  static  void square() {
        System.out.println("square");
    }
}

class Example {
    static void fun1() {
        System.out.println("fun1");
    }
    
    static void fun2() {
        System.out.println("fun2");
    }
    public static void main(String[] args) {
        System.out.println("Hello Example");
        fun1();
        fun2();
        anotherClass a1 = new anotherClass();  // object created
        anotherClass a2 = new anotherClass();  // object created

        a2.x = 5;  // by using object
        a2.y = 10;  // by using object
        System.out.println(a2.x); // by using object
        System.out.println(a2.y); // by using object
        a1.area();  // by using object
        anotherClass.square(); // by using static class
    }
}