export default class Designers {
    constructor(_name, _age, _salary, _status) {
        this.name = _name;
        this.age = _age;
        this.salary = _salary;
        this.department = "Designing";
        this.status = _status;
        if (this.status) {
            this.leader = new DesignerLeader(this.name, this.department);
        }
    }
}

class DesignerLeader {
    constructor(name, department) {
        if (DesignerLeader.instance != null) {
            throw Error("there is already a leader");
        }
        this.name = name;
        this.department = department;
        this.msg = "Look at me , I'm the captain now";
        DesignerLeader.instance = this;
    }
}