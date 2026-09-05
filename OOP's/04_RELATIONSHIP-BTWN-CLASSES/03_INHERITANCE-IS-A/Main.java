class Vehicle {
    void VehicleName(String Name) {
        System.out.println("I Bought the " + Name);
    }
    void Start() {
        System.out.println("Vehicle started....");
    }

    void FillFuel(String FuelName) {
        System.out.println("Filling " + FuelName);
    }

    void Stop() {
        System.out.println("Vehicle stoped....");
    }
}

class Car extends Vehicle {
    void drive() {
        System.out.println("Car drives.......");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.VehicleName("BMW M4");
        myCar.FillFuel("Petrol");
        myCar.Start();
        myCar.drive();
        myCar.Stop();
        
    }
}
