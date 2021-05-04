// B.3. Create a simple form that on submit display confirmation message and
//  according to user action it will either stop submission from proceeding or it will continue form submission.
// Make your own custom event “timeout” that fires after 30 seconds if the user hasn’t entered any data.

function subCheck() {
    var respond = confirm("Do you want to Submit!!!");
    if (!respond) {
        return false;
    } else {
        // document.forms[0].onsubmit = function() {
        //     // var txt = document.getElementById("txt1");
        //     // if (!txt) {
        alert("your info will be sent to the server");
    }
}
// document.forms[0].onsubmit = function() {
//     var txt = document.getElementById("txt1");
//     if (!txt) {
//         alert("your info will be sent to the server");
//     } else {}
// };