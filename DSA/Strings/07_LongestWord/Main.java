

public class Main {
    public static void main(String[] args) {
        String str = "Java is powerful Language";
        String currentWord = "";
        String longestWord = "";

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);

            if (ch != ' ') {
                currentWord += ch;
            } else {
                if (currentWord.length() > longestWord.length()) {
                    longestWord = currentWord;
                }
                currentWord = "";
            }
        }
        if (currentWord.length() > longestWord.length()) {
            longestWord = currentWord;
        }
        System.out.println("Longest Word  : " + longestWord);
        System.out.println("length : " + longestWord.length());
    }
}
