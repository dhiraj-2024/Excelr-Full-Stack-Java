interface vechile {
    int x = 200;
    void changeGear(int a);

    void speedUp(int a);

    void applyBrakes(int a, int b);

    private void userName() {
        System.out.println("Dhiraj");
    }

    default void sayHello() {
        System.out.println("Hello");
        userName();
    };

    static void sayBye() {
        System.out.println("Byee Byeee User");
    }
}

class Bicycle implements vechile {
    int speed;
    int gear;

    public void changeGear(int newGear) {
        gear = newGear;
    }

    public void speedUp(int increment) {
        speed = speed + increment;
    }

    public void applyBrakes(int decrement , int gareDown) {
        speed = speed - decrement;
        gear = gear - gareDown;
    }

    public void printState() {
        System.out.println("Speed :" + speed + " "+  "Gear :" + gear);
    }
}
class Bike implements vechile {
    int speed;
    int gear;

    public void changeGear(int newGear) {
        gear = newGear;
    }

    public void speedUp(int increment) {
        speed = speed + increment;
    }
    
    public void applyBrakes(int decrement ,int gareDown) {
        speed = speed - decrement;
        gear = gear - gareDown;
    }

    public void printState() {
        System.out.println("Speed :" + speed + " "+
        "Gear :"+ gear);
    }
}

public class Main {
    public static void main(String[] args) {

        Bicycle bicycle = new Bicycle();
        bicycle.changeGear(3);
        bicycle.speedUp(30);
        bicycle.applyBrakes(10 , 1);
        System.out.println("Bicycle State is :");
        bicycle.printState();
        bicycle.sayHello();


        Bike bike = new Bike();
        bike.changeGear(4);
        bike.speedUp(80);
        bike.applyBrakes(40,2);
        System.out.println("Bike State is :");
        bike.printState();


        vechile.sayBye();
        System.out.println(vechile.x);
        
    }
}
