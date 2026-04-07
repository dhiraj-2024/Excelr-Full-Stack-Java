abstract class Dog {

    String name = "Sherruu";
    int age = 5;

    abstract void fun1();

    Dog() {
        System.out.println("this is the Dog class constructor");
    }
}

class AnotherDog extends Dog {
    void fun1() {
        System.out.println("this is the another dog function");
    }
}

// class k extends Animal {

//     public static void main() {
//         System.out.println("overriding function of main class");
//     }
// }
public class Animal {

    public static void main(String[] args) {
        System.out.println("Hello");
        // Dog d1 = new Dog();    // it gives error
        // System.out.println(d1.name);

        AnotherDog d2 = new AnotherDog();
        System.out.println(d2.name);
        d2.fun1();

        // k ob = new k();
        // ob.main();
    }

}


