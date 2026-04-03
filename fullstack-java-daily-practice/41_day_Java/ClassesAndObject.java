
class Nokia {

    private int mic;
    private int cam;

    void setCount() {
        mic = 12;
        cam = 40;
    }

    void display() {
        System.out.println("mic :" + mic);
        System.out.println("cam :" + cam);
    }
}

public class ClassesAndObject {
    public static void main(String[] args) {
        System.out.println("this is the classes and object main class");
    
        Nokia obj1 = new Nokia();
        obj1.display(); // 0 0
        obj1.setCount();
        obj1.display(); // 12 40
    }
}
