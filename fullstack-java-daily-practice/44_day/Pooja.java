class Dhiraj {
    int x;
    int y;

    void values() {
        x = 10;
        y = 20;
    }

    void anotherValue(){
        x=44;
        y=30;
}

void display() {
    System.out.println(x);
    System.out.println(y);
}

Dhiraj() {
    System.out.println("this is the dhiraj class cunstructor");
}

}
public class Pooja {

    public static void main(String[] args) {
        System.out.println("Hello pooja");
        Dhiraj obj1 = new Dhiraj();
        // obj1.anotherValue();
        // obj1.values();
        // obj1.display();
    }
    
}


