
// Frequency of elements 
public class Main {
    public static void main(String[] args) {
        String[] letters = { "a", "u", "a", "d", "a", "p", "k", "d", "e", "k", "c", "e" };
        int n = letters.length;
       
        for (int j = 0; j < n; j++) {
            boolean alreadyVisited = false;
            for (int k = 0; k < j; k++) {
                if (letters[j].equals(letters[k])) {
                    alreadyVisited = true;
                    break;
                }
            }
            if (alreadyVisited) {
                continue;
            }
            int count = 1;
            for (int i = j + 1; i < n; i++) {
                if (letters[i].equals(letters[j])) {
                    count++;
                }
            }
            System.out.println(letters[j] + ":" + count);
        }
        

       
    }
}
