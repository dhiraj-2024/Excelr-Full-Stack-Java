class Engin {
    void EnginStart() {
        System.out.println("Engin start");
    }
};

class Car {
    // Achive association using direct refrence variable
    Engin engin = new Engin();

    void start() {
        engin.EnginStart();
        System.out.println("Now we can drive car");
    }
}



public class Main {
    public static void main(String[] args) {
        Car mycar = new Car();
        mycar.start();
    }
}
