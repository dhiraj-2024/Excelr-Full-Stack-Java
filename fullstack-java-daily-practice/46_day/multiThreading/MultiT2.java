class Process1 extends Thread {
    public void run() {
        int x;
        for (x = 1; x < 10; x++) {
            System.out.println("Process 1" + " " + x);
        }
    }

}

class Process2 extends Thread {
    public void run() {
        int x;
        for (x = 1; x < 10; x++) {
            System.out.println("Process 2" + " " + x);
        }
    }
}

public class MultiT2 {

    public static void main(String[] args) {
        Process1 p1 = new Process1();
        Process2 p2 = new Process2();
        p1.start();
        p2.start();
    }
}
