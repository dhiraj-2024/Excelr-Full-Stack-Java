class Car {
    void shiftGare() {
    System.out.println("1st to 5th manual gear");
}
}

class SportsCar extends Car {

    void shiftGare() {
        System.out.println("Use Sport geare first to boost your car power");
    }
}
public class OverRiding {
    public static void main(String[] args) {
        SportsCar sobj1 = new SportsCar();
        Car cobj1 = new Car();
        cobj1.shiftGare();
    
        sobj1.shiftGare();
    }
}
