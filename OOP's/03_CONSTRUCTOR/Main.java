class Student {
    String name;
    int age;
    String city;
    String college = "NIT";

    void display(String name) {
        System.out.println("Hello " + name);
    }
    // No argument constructor assign default values to perform basic setup and opretion
    Student() {
        age = 22;
    }
    // Parameterized constructor 
    Student(String c) {
        city = c;
    }

    void age() {
        System.out.println(age);
    }

    void displaycity() {
        System.out.println(city);
    }
}


public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Dhiraj";
        s1.display(s1.name);
        s1.age();
        s1.displaycity();
        
    }
}
