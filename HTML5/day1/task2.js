var vid,
    playbtn,
    seekslider,
    curtimetext,
    durtimetext,
    mutebtn,
    volumslider,
    fullscreen;

function initalizePlayer() {
    vid = document.getElementById("my_video");
    playbtn = document.getElementById("playpausebtn");
    seekslider = document.getElementById("seekslider");
    curtimetext = document.getElementById("curnttimetext");
    durtimetext = document.getElementById("durtiontimetext");
    mutebtn = document.getElementById("mutebtn");
    volumslider = document.getElementById("volumslider");
    fullscreen = document.getElementById("fullscreen");

    playbtn.addEventListener("click", playpause, false);
    seekslider.addEventListener("change", vidSeek, false);
    vid.addEventListener("timeupdate", seektimeupdate, false);
    mutebtn.addEventListener("click", vidmute, false);
    volumslider.addEventListener("click", setvolum, false);
    fullscreen.addEventListener("click", togglescreen, false);
}

window.onload = initalizePlayer;

function playpause(btn, vid) {
    var vid = document.getElementById(vid);
    if (vid.paused) {
        vid.play();
        btn.innerHTML = "pause";
    } else {
        vid.pause();
        btn.innerHTML = "play";
    }
}

function vidSeek() {
    var seekto = vid.duration * (seekslider.value / 100);
    vid.currentTime = seekto;
}

function seektimeupdate() {
    var nt = vid.currentTime * (100 / vid.duration);
    seekslider.value = nt;
    var curmins = Math.floor(vid.currentTime / 60);
    var cursecs = Math.floor(vid.currentTime - curmins * 60);
    var durmins = Math.floor(vid.duration / 60);
    var dursecs = Math.floor(vid.duration - durmins * 60);
    if (cursecs < 10) {
        cursecs = "0" + cursecs;
    }
    if (dursecs < 10) {
        dursecs = "0" + dursecs;
    }
    if (curmins < 10) {
        curmins = "0" + curmins;
    }
    if (cursecs < 10) {
        cursecs = "0" + cursecs;
    }
    curtimetext.innerHTML = curmins + ":" + cursecs;
    durtimetext.innerHTML = durmins + ":" + dursecs;
}

function vidmute() {
    if (vid.muted) {
        vid.muted = false;
        mutebtn.innerHTML = "mute";
    } else {
        vid.muted = true;
        mutebtn.innerHTML = "unmute";
    }
}

function setvolum() {
    vid.volume = volumslider.value / 100;
}

function togglescreen() {
    if (vid.requestFullScreen) {
        vid.requestFullScreen();
    } else if (vid.webkitRequestFullScreen) {
        vid.webkitRequestFullScreen();
    }
}