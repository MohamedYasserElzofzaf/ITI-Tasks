// C.2. Create an adding function that adds n numbers only.
// Throw exception if the user passed any data type other than “number”
// or
// called your function without passing any parameters.
function adding() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        var num1 = arguments[i];
        if (isNaN(num1)) {
            throw "You passed data type other than NUMBER";
        } else {
            sum += arguments[i];
        }
    }
    return console.log("you enter all numbers and their sum is : " + sum);
}
try {
    adding(1, 3, 4, 5, "hello");
} catch (e) {
    console.error(e);
}