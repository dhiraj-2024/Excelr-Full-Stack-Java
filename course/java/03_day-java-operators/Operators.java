public class Operators {
    public static void main(String[] args) {
        int i = 6;
        i++;
        i--;
        // System.out.println(i);

        // pre increment and post increment/decrement

        int j = 2;
        j++;
        ++j;
        // j = 4; 

        int k = j++; // k get old value of j that is 4;  first assign then increment  
        int l = ++j; // l get new value of the j after increment the j that is 6; frist increment then assing 
        System.out.println(j);
        System.out.println(k);
        System.out.println(l);
    }
}
