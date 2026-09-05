class Processor {
    String pname = "ryzon7";

    void pstart() {
        System.out.println(pname + " processor started to processing...");
    }
}

class Laptop {
    String Lname;
    private Processor processor;

    public void setProcessor(Processor processor) {
        this.processor = processor;
    }

    void boot(String Lname) {
        processor.pstart();
        System.out.println(Lname + " booting now..");
    }
}

public class Main2 {
    public static void main(String[] args) {
        Processor processor = new Processor();
        Laptop myLaptop = new Laptop();
        myLaptop.setProcessor(processor);
        myLaptop.boot("Hp victus");
    }
}
