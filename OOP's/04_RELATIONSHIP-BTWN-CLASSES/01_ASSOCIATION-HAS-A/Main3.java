class Engin {
    void startEngin() {
        System.out.println("Engin started");
    }
};

class Car {
    private Engin engin;

    Car(Engin engin) {
        this.engin = engin;
    }

    void startCar() {
        engin.startEngin();
        System.out.println("car started");
    }
}

public class Main3 {
    public static void main(String[] args) {
        Engin engin = new Engin();
        Car mycar = new Car(engin);
        mycar.startCar();
    }
}
