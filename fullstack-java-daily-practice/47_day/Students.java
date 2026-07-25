

public class Students {
    static String college_name = "MET";
    String s_name;
    int s_age;

    Students() {
        s_name = "unknon";
        s_age = 0;
    }

    Students(String s_name) {
        this.s_name = s_name;
    }

    Students(Students obj) {
        this.s_age = obj.s_age;
        this.s_name = obj.s_name;
    }
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

        Students s3 = new Students("pramod");
        s3.s_age = 23;
        s3.display();

        Students obj = new Students(s1);
        obj.display();

    }
}
