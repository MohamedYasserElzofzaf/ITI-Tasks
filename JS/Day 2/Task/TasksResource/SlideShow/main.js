var i = 1;
var timerID;

function next() {
    if (i > 6) i = 1;
    document.images[0].src = i + ".jpg";
    i++;
}

function previous() {
    var j = i - 1;
    if (j == 0) j = 6;
    document.images[0].src = j + ".jpg";
    i = j;
}

function SlideShow() {
    stop();
    timerID = setTimeout(SlideShow, 2000);
    if (i > 6) i = 1;
    document.images[0].src = i + ".jpg";
    i++;
}

function stop() {
    clearTimeout(timerID);
    document.images[0].src = i + ".jpg";
}