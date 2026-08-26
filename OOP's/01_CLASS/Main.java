class Animal {
    String name;
    int legs;

    static void sleep(String name) {
        System.out.println(name + " is sleeping...zzz");
    }
    void eat(String n) {
        System.out.println(n + " eats wild food...");
    }
}


public class Main {
    public static void main(String[] args) {
        Animal.sleep("Tiger");
    }
}


// Class— a template/blueprint.Does not occupy memory by itself
