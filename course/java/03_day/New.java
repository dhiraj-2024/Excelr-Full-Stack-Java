class methodss {
static void addition(int a , int b){
        System.out.println(a+b);
    }

static void multiplication(int c){
    System.out.println(6 * c);
}

}

public class New  {
    public static void main(String[] argu){
        methodss obj = new methodss();
        obj.addition(3,5);
        obj.multiplication(3);
    }
};
