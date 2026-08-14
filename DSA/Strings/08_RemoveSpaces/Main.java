
public class Main {
    public static void main(String[] args) {
        String str = "Hello hey Guys";
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (ch != ' ') {
                result.append(ch);
            }
        }
        System.out.println(result);
    }
}
