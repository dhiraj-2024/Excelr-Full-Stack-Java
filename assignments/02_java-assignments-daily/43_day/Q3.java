
class Demo {
    String Name = "pramod";

    void getName(String Name) {
        this.Name = Name;
    }

    void printName() {
        System.out.println("Hello " + Name);
    }
}

public class Q3 {
    public static void main(String[] args) {

        Demo d = new Demo();
        d.getName("Dhiraj");
        d.printName();
    }
}
