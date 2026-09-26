abstract class Vehicle {
    int no_of_tyres;

    abstract void start();

    void displayTyers() {
        System.out.println("This vehicle has " + no_of_tyres + " tyres" );
    }
}

class Car extends Vehicle {
    Car() {
        no_of_tyres = 4;
    }

    @Override
    void start() {
        System.out.println("This car start with Key");
    }
}

class Bike extends Vehicle {
    Bike() {
        no_of_tyres = 2;
    }
    @Override 
    void start() {
        System.out.println("This bike start with kick and the cellstart button");
    }
}
public class Main {
    public static void main(String[] args) {
        Vehicle vehicle1 = new Car();
        vehicle1.displayTyers();
        vehicle1.start();

        Vehicle vechicle2 = new Bike();
        vechicle2.displayTyers();
        vechicle2.start();
    }
}
