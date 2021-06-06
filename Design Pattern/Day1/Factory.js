/*
    2- Create your Company structure from employees with different departments 
    (developing, Testing ,Quality controls and Designers)
    Using factory DP create Array OF Employees and display their data
    -make sure each time has only one Team lead
    --separate each type in different files
*/
import Developer from "./devolper";
import Tester from "./tester";

function QualityCon(_name, _age, _salary) {
    this.name = _name;
    this.age = _age;
    this.salary = _salary;
    this.department = "Quality control";
}

function Designers(_name, _age, _salary) {
    this.name = _name;
    this.age = _age;
    this.salary = _salary;
    this.department = "Designer";
}

function EmployeeFactory() {
    this.create = (name, age, salary, department) => {
        switch (department) {
            case "Developer":
                return new Developer(name, age, salary);
            case "Tester":
                return new Tester(name, age, salary);
            case "Quality control":
                return new QualityCon(name, age, salary);
            case 4:
                return new Designers(name, age, salary);
        }
    };
}

function print() {
    console.log(
        `My name is ${this.name} , I'm a  ${this.department} , I'm ${this.age} years old and my salay is ${this.salary}`
    );
}
const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("yasser", 27, 10000, "Developer"));
// employees.push(employeeFactory.create("ali", 2));
// employees.push(employeeFactory.create("mark", 3));
// employees.push(employeeFactory.create("mark", 4));

employees.forEach((emp) => {
    print.call(emp);
});