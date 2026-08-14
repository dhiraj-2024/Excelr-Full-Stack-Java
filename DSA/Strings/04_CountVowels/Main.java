

public class Main {
    public static void main(String[] args) {
        String s1 = "Education";
        s1.toLowerCase();
        int count = 0;
        for (int i = 0; i < s1.length(); i++) {
            char newchar = Character.toLowerCase(s1.charAt(i));
            if (newchar == 'a' || newchar == 'e' || newchar == 'i' || newchar == 'o' || newchar == 'u') {
                count++;
                System.out.println(newchar);
            }
        }
        System.out.println("Total vowels are : "+count);
    }
}
