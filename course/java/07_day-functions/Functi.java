

public class Functi {
    
    public static void main(String[] args) {

        int result = sum(12, 30); // 42
        System.out.println(result);

        greet(); // hello
        sayHello("dhiraj"); // hello dhiraj
        int x = getNumber();
       System.out.println(x);
    }
    

    // i/p o/p 

    static int sum(int i, int j) {
        int result = i + j;
        return result;
    }

    // NO i/p.   NO o/p
    static void greet() {
        System.out.println("hello");
    }

    // i/p.  NO o/p

    static void sayHello(String name) {
        System.out.println("hello" + " " + name);
    }
    
    // no i/p o/p

    static int getNumber() {
        return 10;
    }
}
