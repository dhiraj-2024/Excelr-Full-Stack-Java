class Car {
    String name;
    int wheels;
    void drive() {
        System.out.println("driving");
    }

    static void start(String name, int w) {
        System.out.println(name + " is start and it has " + w + " wheels");
    }
}

public class Main {
    public static void main(String[] args) {
        Car obj1 = new Car();
        obj1.name = "BMW";
        Car.start("BMW",4);
        obj1.drive();
        System.out.println(obj1.wheels);
    }
}
// Object— a real instance of a class, created using new. It occupies memory (heap) and has 3 things: Identity, State Behaviour.