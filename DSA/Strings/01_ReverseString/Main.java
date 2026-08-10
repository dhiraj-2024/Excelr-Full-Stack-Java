

// public class Main {
//     public static void main(String[] args) {
//         String s = "Dhiraj how are you ?";
//         for (int  i = s.length()-1; i >= 0; i--) {
//             System.out.print(s.charAt(i));
//         }
//     }
// }


public class Main {
    public static void main(String[] args) {
        String s = "Dhiraj how are you ?";
        char[] chars = s.toCharArray();

        for (int i = chars.length - 1; i >= 0; i--) {
            System.out.print(chars[i]);
        }
    }
}
