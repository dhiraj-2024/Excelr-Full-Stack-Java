class BankAccount {
private final long accountNumber;
private String accountHolderName;
private double balance;

// Constructor 
public BankAccount(long accountNumber , String accountHolderName) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = 0;
}

// get accountNumber view
public long getAccountnum() {
    return accountNumber;
}
// change acont holder name
public void setAccountHolderName(String name) {
    this.accountHolderName = name;
}
// set balance 
public void setBalance(double amount) {
    if (amount > 0) {
        balance += amount;
        System.out.println("₹" + amount + " deposited successfully.");
    } else {
        System.out.println("Invalid deposit amount.");
    }
}
// get balance
public double getBalance() {
    return balance;
}

// withdrawal 
public void withdrawal(double amount) {
    if (amount <= 0) {
        System.out.println("Invalid withdrawal amount.");
    } else if (amount > balance) {
        System.out.println("Insufficient balance.");
    } else {
        balance -= amount;
        System.out.println("₹" + amount + " withdrawn successfully.");
    }
}

// Display information 
public void displayInfo() {
    System.out.println("\n----- Account Information -----");
    System.out.println("Account Number : " + accountNumber);
    System.out.println("Account Holder : " + accountHolderName);
    System.out.println("Balance : ₹" + balance);
}


}
public class Main {
    public static void main(String[] args) {
        BankAccount user1 = new BankAccount(3094834923094L, "Dhiraj Rajput");
        System.out.println("Account number is : " + user1.getAccountnum());
        user1.setBalance(10000);
        System.out.println("Current Balance : " + user1.getBalance());
        user1.setBalance(5000);
        System.out.println("Current Balance : " + user1.getBalance());
        user1.withdrawal(3000);
        System.out.println("Current Balance : " + user1.getBalance());
        user1.withdrawal(20000);
        System.out.println("Current Balance : " + user1.getBalance());



    }
}
