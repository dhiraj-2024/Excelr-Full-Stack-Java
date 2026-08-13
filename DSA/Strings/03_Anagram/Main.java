
public class Main {
    public static void main(String[] args) {
        String s1 = "listen";
        String s2 = "silent";

        if (s1.length() != s2.length()) {
            System.out.println("not anagram");
            return;
        }
        
        boolean isAnagram = true;
        for (int i = 0; i < s1.length(); i++) {
            int counts1 = 0;
            int counts2 = 0;

            // counting 1st string counts
            for (int j = 0; j < s1.length(); j++) {
                if (s1.charAt(i) == s1.charAt(j)) {
                    counts1++;
                }
            }
            // counting second string counts
            for (int j = 0; j < s2.length(); j++) {
                if (s1.charAt(i) == s2.charAt(j)) {
                    counts2++;
                }
            }
            if (counts1 != counts2) {
                isAnagram = false;
                break;
            }
        }
        if (isAnagram) {
                System.out.println("Anagram");
            } else {
                System.out.println("Not Anagram");
            }

    }
}
