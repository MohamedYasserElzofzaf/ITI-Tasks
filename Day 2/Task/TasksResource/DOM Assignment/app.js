var element;
var select;
setTimeout(function change() {
    document.getElementById("nav").style.listStyleType = "circle";
    element = document.getElementsByTagName("img");
    element[0].style.marginLeft = "auto";
    element[0].style.display = "block";
    var c = document.getElementsByClassName("center");
    var img = document.createElement("img");
    c[0].appendChild(img);
    img.src = "dom.jpg";
    img.id = "img2";
    select = document.getElementById("img2").style.marginRight = "auto";
    select = document.getElementById("img2").style.display = "block";
}, 1000);