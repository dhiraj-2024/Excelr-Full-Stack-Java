

public class Main {
    public static void main(String[] args) {
        String str = "  Hello how are you hello.  ";
        int count = 0;
        for (int i = 0; i < str.length(); i++) {
            char newChar = str.charAt(i);
            if (newChar != ' ' && (i == 0 || str.charAt(i-1) == ' ' )) {
                count++;
            }
        }
        System.out.println(count);
        
    }
}
