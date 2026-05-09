// WAJP TO reverse a string using loops 

public class Q5 {
    public static void main(String[] args) {
        String name = "Dhiraj";
        for (int i = name.length()-1; i >= 0; i--) {
            System.out.print(name.charAt(i));
        }
    }
}
