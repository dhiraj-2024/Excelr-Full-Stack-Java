public class Typeconversion {
    public static void main(String[] args) {

        byte a = 10;
        int b = a;
        System.out.println(b);

        int c = 300;
        // byte d = c;  // gives errr 
        // if you still want to convert 
        byte d = (byte) c;

        System.out.println(d);
        System.out.println(300 - 255);
        
        char alp = 'a';
        int y = alp;
        System.out.println(y); // output 97



        
    }
}
