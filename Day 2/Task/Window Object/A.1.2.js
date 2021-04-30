// A.1.2. Write a script that shows a “typing message” appearing in a new child window.
// The new window should close after few seconds of displaying your message.

// var button = document.createElement("button");
// button.innerHTML = "Magic";
var myWindow;
var i = 0;

function fun() {
    myWindow = window.open("", "", "width=200, height=200");
    setInterval(() => {
        var txt = "You want to see a magic!!!";

        if (i < txt.length) {
            myWindow.document.write(txt.charAt(i));
            i++;
        }
    }, 50);
}

// function funy() {
//     // const paragh = document.createElement("p");
//     // paragh.setAttribute("id", "Typing");
//     // var txt = "You want to see a magic!!!";
//     // if (i < txt.length) {
//     //     myWindow.document.write(txt.charAt(i));
//     //     i++;
//     // }
// }