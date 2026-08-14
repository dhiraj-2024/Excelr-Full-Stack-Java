

public class Main {
    public static void main(String[] args) {
        String s1 = "Hello brow";
        int count = 0;
        for (int i = 0; i < s1.length(); i++) {
            char newChar = Character.toLowerCase(s1.charAt(i));
            if (newChar != 'a' && newChar != 'e' && newChar != 'i' && newChar != 'o' && newChar != 'u' && newChar != ' ') {
                count++;
                System.out.println(s1.charAt(i));
            }
        }
        System.out.println("Total Consonents are : " + count);
    }
}
