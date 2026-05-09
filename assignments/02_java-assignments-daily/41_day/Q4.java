// use conditional statements and write a programm to assign grade to the student according to there marks
import java.util.Scanner;

public class Q4 {
    public static void main(String[] args) {
        Scanner s1 = new Scanner(System.in);
        System.out.println("Enter your All Subject Marks :");
        System.out.println("Marathi : ");
        int marathi_marks = s1.nextInt();
        System.out.println("English : ");
        int english_marks = s1.nextInt();
        System.out.println("Hindi : ");
        int hindi_marks = s1.nextInt();
        System.out.println("Math : ");
        int math_marks = s1.nextInt();
        System.out.println("Science : ");
        int science_marks = s1.nextInt();

        int total_marks = marathi_marks + english_marks + hindi_marks + math_marks + science_marks;
        System.out.println("Total marks are : " + total_marks);
        
        int avg_marks = total_marks / 5;
        System.out.println("Average of the marks is : " + avg_marks);

        if (avg_marks > 90) {
            System.out.println("A+");
            System.out.println("PASS : Excelent");
        } else if (avg_marks < 90 && avg_marks >= 80) {
            System.out.println("B+");
            System.out.println("PASS : Very good");
        } else if (avg_marks < 80 && avg_marks >= 70) {
            System.out.println("C+");
            System.out.println("PASS : Good");
        } else if (avg_marks < 70 && avg_marks >= 600) {
            System.out.println("D+");
            System.out.println("PASS : Average");
        } else if (avg_marks < 60 && avg_marks >= 50) {
            System.out.println("E+");
            System.out.println("PASS : Below Average");
        } else if (avg_marks < 50 && avg_marks >= 35) {
            System.out.println("F+");
            System.out.println("PASS : Wrost Situation");
        } else if (avg_marks < 35 && avg_marks >= 0) {
            System.out.println("G+");
            System.out.println("Fail : Bad Luck");
        }
        
    }
}
