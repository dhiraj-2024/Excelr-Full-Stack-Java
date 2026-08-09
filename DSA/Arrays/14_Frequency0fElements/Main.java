
// Frequency of elements 
public class Main {
    public static void main(String[] args) {
        String[] letters = { "a", "u", "a", "d", "a", "p", "k", "d", "e", "k", "c", "e" };

        int n = letters.length;
        boolean alreadVisited = false;

        for (int i = 0; i < n; i++) {
            int count = 1;
            for (int j = i + 1; j < n; j++) {
                
                if (letters[i] == letters[j]) {
                    count++;
                }
            }
            System.out.println(letters[i] + " : " + count);
        }
    }
}
