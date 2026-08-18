

public class Main2 {
    public static void main(String[] args) {
        String[] names = { "Dhiraj", "Pramod", "Suyog", "Pooja", "Kalin" };
        String target = "Suyog";
        int tepm = 0;
        for (int i = 0; i < names.length; i++) {
            if (target == names[i]) {
                System.out.println("index is : " + i);
                tepm++;
            }
        }
        if (tepm == 0) {
            System.out.println(-1);
        }
    }
}
