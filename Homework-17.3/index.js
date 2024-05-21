class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
  deposit(sum) {
    this.balance = this.balance + sum;
  }
  withdraw(sum) {
    if (sum > this.balance) {
      console.log("Недостатньо коштів");
    } else {
      this.balance = this.balance - sum;
    }
  }
  getBalance() {
    return this.balance;
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000
account1.deposit(500);
console.log(account1.getBalance()); // 1500
account1.withdraw(200);
console.log(account1.getBalance()); // 1300
