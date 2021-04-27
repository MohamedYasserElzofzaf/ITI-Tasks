// B.1. Alert ASCII Code of any key pressed and detect whether it is alt key or ctrl key or shift key
/* In this example, we use a cross-browser solution, 
because the keyCode property does not work on the onkeypress event in Firefox. 
However, the which property does.
Explanation of the first line in the function below: 
if the browser supports event.which, 
then use event.which, otherwise use event.keyCode */
function myFunction(event) {
    var x = event.which || event.keyCode;
    document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
    if (event.altKey && event.shiftKey) {
        alert("Test");
    }
}
/*
function uniKeyCode(event) {
    var key = event.keyCode;
    document.getElementById("demo2").innerHTML = "Unicode KEY code: " + key;
}
*/