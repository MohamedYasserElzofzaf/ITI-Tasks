/*
    2- Create your Company structure from employees with different departments 
    (developing, Testing ,Quality controls and Designers)
    Using factory DP create Array OF Employees and display their data
    -make sure each time has only one Team lead
    --separate each type in different files
*/
import Developer from "./developer";
import Tester from "./tester";
import QualityCon from "./QualityControl";
import Designers from "./Designers";

function EmployeeFactory() {
    this.create = (name, age, salary, department, status) => {
        switch (department) {
            case "Developer":
                return new Developer(name, age, salary, status);
            case "Tester":
                return new Tester(name, age, salary, status);
            case "Quality control":
                return new QualityCon(name, age, salary, status);
            case "Designing":
                return new Designers(name, age, salary, status);
        }
    };
}

function print() {
    console.log(
        `My name is ${this.name} , I'm a  ${this.department} , I'm ${this.age} years old and my salary is ${this.salary} , ${this.status}`
    );
}
const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("yasser", 27, 10000, "Developer", 1));
employees.push(employeeFactory.create("ali", 20, 10000, "Tester", 1));
employees.push(
    employeeFactory.create("john", 37, 100000, "Quality control", 0)
);
employees.push(employeeFactory.create("max", 19, 1000, "Designing"));
employees.push(employeeFactory.create("ned", 25, 11000, "Developer", 0));

employees.forEach((emp) => {
    print.call(emp);
});