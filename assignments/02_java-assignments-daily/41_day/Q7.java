// create a program that demonostrate the use of this keyword in java : 

// this refers to the current object of the class and its instence variable
class Animal {
    int a;

    Animal(int a) {
        this.a = a;
    }

    void show() {
        System.out.println(a);
    }
}
// by using this we can call the constructor 
class Demo {
    Demo() {
        this(400);
    }

    Demo(int b) {
        System.out.println(b);
    }
}

// by using this we can call the method 

class Example {
    void m1() {
        System.out.println("this is method 1");
    }

    void m2() {
        this.m1();
    }
}



public class Q7 {

    void show() {
        System.out.println(this);
    }
    public static void main(String[] args) {
        
        // Q7 r = new Q7();
        // System.out.println(r);
        // r.show();
        Animal a1 = new Animal(100);
        System.out.println();
        a1.show();

        Demo d = new Demo();
        Example e = new Example();
        e.m2();
    
    
        
    }
    
}
