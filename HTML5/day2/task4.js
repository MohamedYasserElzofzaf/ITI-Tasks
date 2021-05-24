var x = 4;
timer = setInterval(function Animate() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.strokeRect(10, 10, 680, 450);
    x++;
    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(x * 3, x * 2);
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();
    if (x == 230) {
        alert("animate end");
        clearInterval(timer);
    }
}, 10);