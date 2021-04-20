var win;

function openNewWin() {
    win = open("chilWindow.html", "", "width= 150 , height = 150");
}

function closeNewWin() {
    win.close();
}

function changeBackgrd() {
    win.document.bgcolor = "red";
    win.focus();
}