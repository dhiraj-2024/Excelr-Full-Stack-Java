 class college {
    final String clgName = "MET's Institute of Technology";
  private  String Dpartment = "Computer Science and Design";

   void displayDepartment() {
    System.out.println(Dpartment);
  }


}


public class Demo1 {

    public static void main(String[] args) {
        college clg = new college();
        clg.displayDepartment();

        
        
    }
}
