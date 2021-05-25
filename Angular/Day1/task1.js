class Account {
    constructor(_accNum, _balance) {
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
class currentAccount extends Account {
    constructor(interest_rate) {
        super();
        this.interest_rate = interest_rate;
    }
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}
class savingAccount extends Account {
    constructor(interest_rate) {
        super();
        this.interest_rate = interest_rate;
    }
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}
