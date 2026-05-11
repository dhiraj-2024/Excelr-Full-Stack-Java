// HCF

public class Hcf {
    public static void main(String[] args) {
        int num1 = 12;
        int num2 = 18;
        int hcf = 1;

        int smaller;
        if (num1 < num2) {
            smaller = num1;
        }
        else {
            smaller = num2;
        }

        for (int i = 1; i < smaller; i++) {
            if (num1 % i == 0 && num2 % i == 0) {
                 hcf = i;
            }
        }
        System.out.println(hcf);


    }
}
