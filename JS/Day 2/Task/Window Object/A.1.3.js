// A.1.3. Create a parent a window that opens a scrollable advertis

function ad() {
    var mywin = open("Ad.html", " ", "width=400,height=300");
    setInterval(function() {
        mywin.scrollBy(15, 15);
    }, 500);
}