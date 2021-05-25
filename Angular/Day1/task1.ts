class Account {
  accNum: number;
  balance: number;
  constructor(_accNum: number, _balance: number) {
    this.accNum = _accNum;
    this.balance = _balance;
  }
  debitAmount() {
    return true;
  }
  creditAmount() {
    return true;
  }
  getBalance() {
    return true;
  }
}
interface IAccount {
  date: Date;
  addCustomer();
  removeCustomer();
}

class currentAccount extends Account implements IAccount {
  constructor(public interest_rate: number) {
    super();
  }
  date: Date;
  addCustomer() {
    throw new Error("Method not implemented.");
  }
  removeCustomer() {
    throw new Error("Method not implemented.");
  }
}

class savingAccount extends Account implements IAccount {
  constructor(public interest_rate: number) {
    super();
  }
  date: Date;
  addCustomer() {
    throw new Error("Method not implemented.");
  }
  removeCustomer() {
    throw new Error("Method not implemented.");
  }
}
