

public class Students {
    static String college_name = "MET";
    String s_name;
    int s_age;

    void display() {
        System.out.println(college_name + " " + s_name + " " + s_age);
    }
    
    public static void main(String[] args) {
        Students s1 = new Students();
        s1.s_name = "dhiraj";
        s1.s_age = 23;
        Students s2 = new Students();
        s2.s_name = "pooja";
        s2.s_age = 21;

        s1.display();
        s2.display();
    }
}
