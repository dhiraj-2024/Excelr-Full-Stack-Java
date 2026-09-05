class BankAccount {
    private double Balance;


    public void deposit(double amount) {
        if (amount > 0)
            Balance += amount;
    }

    public double getBalance() {
        return Balance;
    }
    public void withdrwal(double amount) {
        if (Balance > 0  && amount <= Balance) {
            Balance -= amount;
        } else {
            System.out.println("Balance is not Suffisient");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();
        account.deposit(2500);
        System.out.println(account.getBalance());
        account.withdrwal(2501);
        System.out.println(account.getBalance());


    }
}
