
public class Arrays {
    public static void main(String[] args) {

        int[] rollNo = new int[5];

        // manually entering data retriving data in  array

         rollNo[0] = 101;
         rollNo[1] = 102;
         rollNo[2] = 103;
         rollNo[3] = 104;
         rollNo[4] = 105;

        // rollNo[5] = 106;

        System.out.println(rollNo[0]);
        System.out.println(rollNo[1]);
        System.out.println(rollNo[2]);
        System.out.println(rollNo[3]);



        int[] marks = new int[5];
        int x = 88;
        for (int i = 0; i <= rollNo.length - 1; i++) {
            marks[i] = x;
            x++;
        }
        
        for (int i = 0; i <= marks.length - 1; i++) {
            System.out.println("marks are : " + marks[i]);
        }
        

        String[] arr = { "Dhiraj", "Raju", "pramod", "pratik" };

        System.out.println(arr[3]);


    }
}
