
class Friend {
private static int x;

static void fun1() {
        x = 10;
        System.out.println(x);
    }
}

public class PrivateClassAcess {
    
    public static void main(String[] args) {
        System.out.println("hey watsapp");
        // Friend obj = new Friend();
        // obj.fun1();

        Friend.fun1();  // by using static keyword

    }
}
