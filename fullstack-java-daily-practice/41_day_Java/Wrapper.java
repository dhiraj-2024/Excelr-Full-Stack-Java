

public class Wrapper {
    public static void main(String[] args) {

        // for Integers 

        int x = Integer.parseInt("124323"); // 124323
        Integer x1 = Integer.valueOf("10011101", 2); // 157
        int y = x1.intValue();

        System.out.println(x);
        System.out.println(y);

        // for Doubles 

        double a = Double.parseDouble("3243");
        Double a1 = Double.valueOf("23");
        double b = a1.doubleValue();

        System.out.println(a); // 3243.0
        System.out.println(b); // 23.0


        // Array

        String k[] = new String[2];
        k[0] = "dhiraj";
        k[1] = "pandu";
        System.out.println(k.length);
        System.out.println(k[1]);



    }
}
