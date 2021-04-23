// A.1.2. Write a script that shows a “typing message” appearing in a new child window.
// The new window should close after few seconds of displaying your message.

var myWindow = window.open("", "myWindow", "width=200, height=200");

var button = document.createElement("button");
button.innerHTML = "Magic";

const paragh = document.createElement("p");
paragh.setAttribute("id", "Typing");
var i = 0;
var txt = "You want to see a magic!!!";
var speed = 50;

button.addEventListener("click", function typeWriter() {
    if (i < txt.length) {
        document.getElementById("Typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
});