export default class Tester {
    constructor(_name, _age, _salary, _status) {
        this.name = _name;
        this.age = _age;
        this.salary = _salary;
        this.department = "Tester";
        this.status = _status;
        if (this.status) {
            this.leader = new TesterLeader(this.name, this.department);
        }
    }
}

class TesterLeader {
    constructor(name, department) {
        if (TesterLeader.instance != null) {
            throw Error("there is already a leader");
        }
        this.name = name;
        this.department = department;
        this.msg = "Look at me , I'm the captain now";
        TesterLeader.instance = this;
    }
}