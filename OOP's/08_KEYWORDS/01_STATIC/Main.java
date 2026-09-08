class Employee {
    String name;
    float salary;
    static String companyName = "Tcs";
    int employeeId;
    static int count = 0;

    Employee(String name) {
        this.name = name;
        count++;
        employeeId = count;
    }

    static void employeecount() {
        System.out.println(count);
    }
}


class Calculator {
    static float add(int a, int b) {
        return (a + b);
    }

    static float sub(int a, int b) {
        return (a - b);
    }
    
    static float multiply(int a, int b) {
        return (a * b);
    }
    
    static float divide(int a, int b) {
        return (a / b);
    }
}



public class Main {
    public static void main(String[] args) {

        // Example 1
        Employee e1 = new Employee("Dhiraj");
        Employee e2 = new Employee("pandu");
        Employee e3 = new Employee("saee");
        Employee.employeecount();
        System.out.println(e1.employeeId);
        System.out.println(e2.employeeId);
        System.out.println(e3.employeeId);

        // Example 2
        System.out.println(Employee.companyName);

        // Example 3

        System.out.println(Calculator.add(12, 45));
        System.out.println(Calculator.multiply(4, 5));
        System.out.println(Calculator.sub(20, 12));
        System.out.println(Calculator.divide(100, 9));
        
    }
}
