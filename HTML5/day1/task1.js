function myColor() {
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;

    var color = "rgb(" + red + "," + green + "," + blue + ")";

    document.getElementById("text").style.color = color;
}

document.getElementById("red").addEventListener("input", myColor);
document.getElementById("green").addEventListener("input", myColor);
document.getElementById("blue").addEventListener("input", myColor);