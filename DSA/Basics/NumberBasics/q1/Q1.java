// COUNT DIGIT FROM THE NUMBER

public class Q1 {
    public static void main(String[] args) {
        int num = 243453;
        int count = 0;

        while (num > 0) {
            num /= 10;
            count++;
        }
        System.out.println(count);
    }
}
