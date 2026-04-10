

class DatatypesAndVariables {
    // Datatypes and variables 
    // INTEGER 
    byte num = 34;
    short num2 = 2394;
    int num3 = 2223944;
    long num4 = 2338093298L;

    int bynary = 0b1011001101; // bynary number use 0b
    int octal = 07; // use 0 befor number 
    int hex = 0X5A;

    // REAL NUMBERS     
    float values = 34.3420f;
    double val = 324.343686868678987987d;
    boolean type = true;
    char Letter = 'd';
    String Name = "Dhiraj rajput";
    
    // constatn variable 
    final int minPerHour = 60;
    // minPerHour = 44;  // Can not assing new value to the constant variable
}

public class First {
    public static void main (String [] argu){
        DatatypesAndVariables obj = new DatatypesAndVariables();
        System.out.println(obj.num + " " + obj.num2 + " " + obj.num3 + " " + obj.num4 + " " + obj.bynary + " "
                + obj.octal + " " + obj.hex);
        System.out.println(obj.values);
        System.out.println(obj.val);
        System.out.println( "The sum of age and val are : "+ obj.val);
    }
}

