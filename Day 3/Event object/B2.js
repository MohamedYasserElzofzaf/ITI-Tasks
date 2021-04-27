// B.2. Prevent context menu from being displayed by preventing the mouse right click from its action.
// Note: context menu is the menu displayed when mouse right button is clicked

var prev = document.getElementById("prevent");

function handler(event) {
    event = event || window.event;

    if (event.stopPropagation) event.stopPropagation();

    event.cancelBubble = true;
    return false;
}

prev.innerHTML = "right-click here";

prev.onclick = handler;
prev.onmousedown = handler;
prev.onmouseup = handler;

////////////////////////////////////
[...document.querySelectorAll(".prevCon")].forEach((el) =>
    el.addEventListener("contextmenu", (e) => e.preventDefault())
);