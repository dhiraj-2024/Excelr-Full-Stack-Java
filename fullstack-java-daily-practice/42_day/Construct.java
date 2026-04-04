
class Hello {
 int x, y;
    
     void fun1() {
        x = 10;
        y = 20;
    }

    void disfun() {
        System.out.println(x);
        System.out.println(y);
    }

    Hello() {
        System.out.println("Hello i am the Constructor funtion calling from the HEllo Class");
    }

}

public class Construct {
    public static void main(String[] args) {

        Hello h = new Hello();
        h.fun1();
        h.disfun();

        
    }
    
}
