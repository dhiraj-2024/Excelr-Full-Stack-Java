class Process1 implements Runnable {
   public void run() {
        int x;
        for (x = 1; x < 10; x++) {
            System.out.println("Process 1" + " " + x);
        }
    }


}

class Process2 implements Runnable {
  public  void run() {
        int x;
        for (x = 1; x < 10; x++) {
            System.out.println("Process 2" + " " + x);
        }
    }
}

public class MultiT {
    
    public static void main(String[] args) {
        Process1 p1 = new Process1();
        // p1.f1();
        Process2 p2 = new Process2();
        // p2.f1();
        Thread t1 = new Thread(p1);
        Thread t2 = new Thread(p2);
        t1.start();
        t2.start();



        
    }
}
