var i = 1;
var timerID;

function changeImg() {
    timerID = setTimeout(changeImg, 2000);
    if (i > 6) i = 1;
    document.images[0].src = i + ".jpg";
    i++;
}

function returnImg() {
    clearTimeout(timerID);
    document.images[0].src = "3.jpg";
}