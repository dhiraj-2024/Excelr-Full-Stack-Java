class BankAccount {
    final String accountNumber;
    String accountHolder;
    double balance;

    BankAccount(String acno) {
        this.accountNumber = acno;
    }
}

final class Employee {
    final void companyRules() {
        System.out.println("company rules ok");

    }
}

// can not extend final class
// class Developer extends Employee {
//     // void companyRules() {
//     //     System.out.println("hello");
//     // }
//     // cannot override final methods
    
// }

public class Main {
    public static void main(String[] args) {
        // Example 1
        BankAccount acc = new BankAccount("1001");
        System.out.println(acc.accountNumber);

        // Example 2
        Developer d = new Developer();
        d.companyRules();
    }
}
