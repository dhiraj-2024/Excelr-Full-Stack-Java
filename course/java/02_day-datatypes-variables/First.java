

class DatatypesAndVariables {
    // Datatypes and variables 
    String Name = "Dhiraj rajput";
    int Age = 22;
    char Letter = 'd';
    double val = 324.343686868678987987d;
    float values = 34.00f;
    boolean type = true;
    
    // constatn variable 
    final int minPerHour = 60;
    // minPerHour = 44;  // Can not assing new value to the constant variable
}

public class First {
    public static void main (String [] argu){
        DatatypesAndVariables obj = new DatatypesAndVariables();
        System.out.println(obj.Name + " " + obj.Age + " " + obj.Letter + " " + obj.val + " " + obj.values);
        System.out.println( "The sum of age and val are : "+obj.Age + obj.val);
    }
}

