class WhiteBoard {
    void WriteOnBoard() {
        System.out.println("Writing on the whitebord...");
    }
}

class Teacher {
    void TeachLesson() {
        WhiteBoard board = new WhiteBoard();
        board.WriteOnBoard();
        System.out.println("Teacher is explaining the topic.");
    }
}

// example 2 
// printer and office worker 

class Printer {
    void PrintDoc() {
        System.out.println("printing documents...");
    }
}

class OfficeWorder {
    void PerformTask(Printer p) {
        p.PrintDoc();
        System.out.println("OfficeWorker has completed printing task.");
    }
}

public class Main {
    public static void main(String[] args) {
        Teacher t1 = new Teacher();
        t1.TeachLesson();

        OfficeWorder emp = new OfficeWorder();
        Printer p = new Printer();
        emp.PerformTask(p);
    }
}
