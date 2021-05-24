var con = document.getElementById("canvas");
var theron = con.getContext("2d");
var grad = theron.createLinearGradient(0, 100, 350, 100);
grad.addColorStop(0, "white");
grad.addColorStop(0.3, "#a6d5d6");
grad.addColorStop(1, "#3d79b8 ");
grad.addColorStop(0.7, "#04007b");
theron.fillStyle = grad;
theron.lineWidth = 2;
theron.strokeStyle = "blue";
theron.arc(250, 250, 200, 0, 2 * Math.PI);
theron.fill();
theron.stroke();
theron.moveTo(370, 250);
theron.fillStyle = grad;
theron.lineWidth = 2;
theron.strokeStyle = "blue";
theron.arc(250, 250, 120, 0, 2 * Math.PI);
theron.fill();
theron.stroke();
theron.font = "210px serif";
theron.fillStyle = "white";
theron.fillText("M", 170, 320);