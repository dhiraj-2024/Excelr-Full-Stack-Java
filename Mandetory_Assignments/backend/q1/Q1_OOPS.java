// Q1_OOPS.java

// Interface
interface Vehicle {
    void start();
}

// Abstract class
abstract class Animal {
    abstract void sound();
}

// Parent class
class Person {
    String name;

    Person(String name) {
        this.name = name;
    }

    void show() {
        System.out.println("Name: " + name);
    }
}

// Child class (Inheritance + Method Overriding)
class Student extends Person {
    Student(String name) {
        super(name);
    }

    void show() { // overriding
        System.out.println("Student Name: " + name);
    }
}

// Method Overloading
class MathOp {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}

// Class implementing interface
class Car implements Vehicle {
    public void start() {
        System.out.println("Car started");
    }
}

// Using abstract class
class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Q1_OOPS {
    public static void main(String[] args) {

        Student s = new Student("Dhiraj");
        s.show();

        MathOp m = new MathOp();
        System.out.println(m.add(2, 3));
        System.out.println(m.add(2, 3, 4));

        Car c = new Car();
        c.start();

        Dog d = new Dog();
        d.sound();
    }
}