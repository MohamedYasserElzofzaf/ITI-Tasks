export default class QualityCon {
    constructor(_name, _age, _salary, _status) {
        this.name = _name;
        this.age = _age;
        this.salary = _salary;
        this.department = "Quality Control";
        this.status = _status;
        if (this.status) {
            this.leader = new QualityControlLeader(this.name, this.department);
        }
    }
}

class QualityControlLeader {
    constructor(name, department) {
        if (QualityControlLeader.instance != null) {
            throw Error("there is already a leader");
        }
        this.name = name;
        this.department = department;
        this.msg = "Look at me , I'm the captain now";
        QualityControlLeader.instance = this;
    }
}