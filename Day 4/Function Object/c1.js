// C.1. Create a function that accepts only 2 parameters
// and throw exception if number of parameters either less than or exceeds 2 parameters

function fun() {
    var sum = 0;
    // var myError = new Error("Number of parameters less than 2");
    // var myError1 = new Error("Number of parameters exceeds 2");
    if (arguments.length < 2) {
        throw "Number of parameters less than 2";
    }
    if (arguments.length > 2) {
        throw "Number of parameters exceeds 2";
    }
    if ((arguments.length = 2)) {
        sum = arguments[0] + arguments[1];
        return console.log(sum);
    }
}
try {
    fun(1, 3, 4, 5);
} catch (e) {
    console.error(e);
}