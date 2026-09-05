class Student {
    private String Name;
    private int Roll_No;
    private double Marks;
    // Set Marks
    public void setMarks(double Marks) {
        if (Marks > 0 && Marks < 100) {
            this.Marks = Marks;
        }
    }
    // Get Marks
    public double getMarks() {
        return Marks;
    }
    // set student information
    public void setInfo(String Name, int Rollno) {
        this.Name = Name;
        this.Roll_No = Rollno;
    }

    public void displayStudentInfo() {
        System.out.println("My name is "+ Name + "." +"My Roll no is : " + Roll_No + "," + " I have total "+ Marks + " marks");
    }

}


public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.setMarks(89);
        System.out.println(s1.getMarks());
        s1.setInfo("Dhiraj", 18);
        s1.displayStudentInfo();
    }
}
