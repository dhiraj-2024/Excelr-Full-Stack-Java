// calculate the area of circle
import java.util.Scanner;
public class Q6 {
    public static void main(String[] args) {
        float pi = 3.14f;
        Scanner s1 = new Scanner(System.in);
        System.out.println("Enter Radius of the circle :");
        float radius = s1.nextFloat();

        double area = pi * (radius * radius);
        System.out.println("Area of cirlce is : " + area);
    }
}
