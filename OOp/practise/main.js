var Employee = function(nm, sal, dept, id, ybrn) {
    // overloading
    this.empName = nm ? nm : "Yasser";
    this.dept = dept ? dept : "CS";
    this.salary = sal ? sal : 6000;
    this.empID = id ? id : "Yasser-94";

    // private member
    var yearborn = ybrn ? ybrn : "1994";

    // privilaged Method
    this.getYearBorn = function() {
        return yearborn;
    };
    this.setYearBorn = function() {
        if (typeof val !== "string") throw "improper string format";
        yearborn = val.toString();
    };
};