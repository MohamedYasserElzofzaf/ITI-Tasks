/*
    2- Create your Company structure from employees with different departments 
    (developing, Testing ,Quality controls and Designers)
    Using factory DP create Array OF Employees and display their data
    -make sure each time has only one Team lead
    --separate each type in different files
*/

function Developer(_name, _age, _salary) {
    this.name = _name;
    this.age = _age;
    this.salary = _salary;
}

function Tester(_name, _age, _salary) {
    this.name = _name;
    this.age = _age;
    this.salary = _salary;
}

function QualityCon(_name, _age, _salary) {
    this.name = _name;
    this.age = _age;
    this.salary = _salary;
}

function Designers(_name, _age, _salary) {
    this.name = _name;
    this.age = _age;
    this.salary = _salary;
}