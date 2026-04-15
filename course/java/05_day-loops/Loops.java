public class Loops {
    public static void main(String[] argu) {
        System.out.println("hwllo boys");

        // while loop 
        int i = 0;

        while (i <= 10) {
            System.out.println(i);
            i++;

        }
        
        // do while loop

        int j = 11;
        do{
            System.out.println("j is : "+j);
            j++;
        } while (j < 20);


        // int k = 20;
        for (int k = 20; k <= 30; k++) {
            System.out.println(k);
        }
        
        // PRINTING PATTERS 

        for (int s = 0; s <= 5; s++) {
            for (int r = 0; r <= s; r++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}