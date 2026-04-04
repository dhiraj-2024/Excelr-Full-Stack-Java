class B {

    int x = 20;
    int y = 30;
}
 class C extends B {
     int z = 100;
    
     void display() {
         System.out.println(x);
         System.out.println(y);
         System.out.println(z);
        
     }
}

public class A {
    public static void main(String[] args) {
        System.out.println("Hello");

        C obj1 = new C();
        obj1.display();
    }
}
