// C.3. Write two different function with two different forms implementations
// that takes any number of parameters
// and
// returns them reversed using array’s reverse function.

function reversed(str) {
    var arr = str.split("");
    arr.reverse();
    return console.log(arr.join(""));
}
var rev = function(str) {
    var revers = "";
    for (var character of str) {
        revers = character + revers;
    }
    return console.log("second implementations " + revers);
};

reversed("Hello you!");
rev("Hello world ");