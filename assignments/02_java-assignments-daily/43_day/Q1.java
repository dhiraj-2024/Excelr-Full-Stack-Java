// WAJP  include the keywords public , static , return , final ,class

class Animal {
    static void sound() {
        System.out.println("Animal makes sound");
    }
}

class Area {
    static void Cirle(float radius) {
        final float pi = 3.14f;
        double area = pi * (radius * radius);
        System.out.println(area);
    }

    static int getData() {
        return 400;
    }
}

public class Q1 {
    public static void main(String[] args) {
        Animal.sound();
        Area.Cirle(2);
        int data = Area.getData();
       System.out.println(data);
    }
}
