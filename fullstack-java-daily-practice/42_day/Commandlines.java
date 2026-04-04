
public class Commandlines {
    public static void main(String[] args) {
        // System.out.println(args[0]);
        // System.out.println(args[2]);
        // System.out.println(args[3]);

        int i , s=0;
        for (i = 0; i < args.length; i++) {
            s = s + Integer.parseInt(args[i]);
    }
    System.out.println("average is : " + s / args.length);
    System.out.println("total  is : " + s);
}
}
