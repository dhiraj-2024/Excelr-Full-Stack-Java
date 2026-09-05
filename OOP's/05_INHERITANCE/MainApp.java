class Vehicle {
    void start() {
        System.out.println("Vehicle starts.");
    }
}

class Car extends Vehicle {
    void drive() {
        System.out.println("Car drives.");
    }
}

public class MainApp {
    public static void main(String[] args) {
        Car myCar = new Car();

        myCar.start(); // inherited from Vehicle
        myCar.drive(); // specific to Car
    }
}