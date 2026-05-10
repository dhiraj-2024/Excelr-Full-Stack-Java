
// Q4_Employee.java
import java.util.*;

class Employee {
    int id;
    String name;
    String dept;
    double salary;

    Employee(int id, String name, String dept, double salary) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.salary = salary;
    }

    void display() {
        System.out.println(id + " " + name + " " + dept + " " + salary);
    }
}

public class Q4_Employee {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        ArrayList<Employee> list = new ArrayList<>();

        while (true) {
            System.out.println("1.Add 2.Update 3.Delete 4.Display 5.Search 6.Exit");
            int ch = sc.nextInt();

            if (ch == 1) {
                System.out.println("Enter id name dept salary:");
                int id = sc.nextInt();
                String name = sc.next();
                String dept = sc.next();
                double sal = sc.nextDouble();

                list.add(new Employee(id, name, dept, sal));
            }

            else if (ch == 2) {
                System.out.println("Enter id:");
                int id = sc.nextInt();

                for (Employee e : list) {
                    if (e.id == id) {
                        System.out.println("Enter new name:");
                        e.name = sc.next();
                    }
                }
            }

            else if (ch == 3) {
                System.out.println("Enter id:");
                int id = sc.nextInt();

                list.removeIf(e -> e.id == id);
            }

            else if (ch == 4) {
                for (Employee e : list) {
                    e.display();
                }
            }

            else if (ch == 5) {
                System.out.println("Enter id:");
                int id = sc.nextInt();

                for (Employee e : list) {
                    if (e.id == id) {
                        e.display();
                    }
                }
            }

            else {
                break;
            }
        }

        sc.close();
    }
}