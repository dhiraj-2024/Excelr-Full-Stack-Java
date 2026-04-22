
class Student {
    String name = "dhiraj";
    int age = 22;
    double salary = 5000000;

    Student() {
        System.out.println("i run automatically i am a constructor of student class");
    }

    void pname(String n) {
        System.out.println("welcome" + " " + n);
    }
}

class Person {
    static void p1() {
        System.out.println("hello this is the person");
    }
    
}

public class Demo1 {
    
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.pname("pandu bhai");
        System.out.println(s1.name);
        s1.name = "pramod";
        System.out.println(s1.name);
        System.out.println(s1.age);
        // s1.age = 33;
        // System.out.println(s1.age);
        

        Student s2 = new Student();
        s2.name = "pandu";
        System.out.println(s2.name);

        Person.p1();
    }
}
