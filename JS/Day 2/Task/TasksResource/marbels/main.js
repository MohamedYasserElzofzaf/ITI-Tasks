var image = document.querySelectorAll("img");
var timer;

function go() {
    var imgSrc = image[0].src;
    for (var i = 0; i < image.length - 1; i++) {
        image[i].src = image[i + 1].src;
    }
    image[i].src = imgSrc;
}

function play() {
    timer = setInterval(go, 200);
}

function stop() {
    clearInterval(timer);
}