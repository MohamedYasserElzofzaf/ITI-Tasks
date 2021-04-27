// Make your own .js library to create,
// display and delete cookies,
// then use it in creating the required cookies to display a greeting message to your visitor
// with displaying an image as his profile pic referring to his gender,
// and inform him with his number of visits to the site.
// Display user name and number of visits with font color according to his choices.
// Replace the registration page with the profile page using location object
// the library should have the following functions:
//  getCookie(cookieName):
// o Retrieves a cookie value based on a cookie name.
//  setCookie(cookieName,cookieValue[,expiryDate]):
// o Sets a cookie based on a cookie name, cookie value, and expiration date.
//  deleteCookie(cookieName):
// o Deletes a cookie based on a cookie name.
//  allCookieList():
// o returns a list of all stored cookies
//  hasCookie(cookieName):
// o Check whether a cookie exists or not

function saveInfo() {
    var date = new Date();
    date.setMonth(date.getMonth() + 2);
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    //var male = document.getElementById("male").value;
    // var female = document.getElementById("female").value;
    var favcolor = document.getElementById("favcolor").value;

    document.cookie = "usernamecookie=" + name + ";expires=" + date;
    document.cookie = "useragecookie= " + age + ";expires=" + date;
    // document.cookie = "UserGenderCookie" +  + ";expires=" + date;
    // document.cookie;
}

function getcookie() {
    var assoiativeCookie = [];
    var splitCookie = document.cookie.split(";");
    for (var i = 0; i < splitCookie.length; i++) {
        assoiativeCookie[splitCookie[i].split("=")[0].trim()] = splitCookie[
            i
        ].split("=")[1];
    }
    return assoiativeCookie;
}

function displayGreetings() {
    var cookie = getcookie();
    var h1Elem = document.createElement("h1");
    document.body.appendChild(h1Elem);
    var name = cookie["usernamecookie"];

    var txt = "Welcome " + name;
    h1Elem.appendChild(document.createTextNode(txt));
}

// function displayInfo() {
//     var cookieVals = document.cookie;
//     var firstcookieIdx = cookieVals.indexOf("usernamecookie");
//     var firstcookieLstIdx = cookieVals.indexOf(";", firstcookieIdx);

//     var usrNameCookie = cookieVals.substring(firstcookieIdx, firstcookieLstIdx);
//     var usrNameCookieName = usrNameCookie.split("=")[0];
//     var usrNameCookieval = usrNameCookie.split("=")[1];

//     var secondCookieIdx = cookieVals.indexOf("useragecookie");
//     var secondCookieLstIdx = cookieVals.indexOf(";", secondCookieIdx);
//     if (secondCookieLstIdx < 0) {
//         var secondCookie = cookieVals.substring(secondCookieIdx, cookieVals.length);
//     } else {
//         var secondCookie = cookieVals.substring(
//             secondCookieIdx,
//             secondCookieLstIdx
//         );
//     }
//     var ageCookieName = secondCookie.split("=")[0];
//     var ageCookieval = secondCookie.split("=")[1];

//     document.getElementById("div1").innerHTML =
//         "Welcome " +
//         usrNameCookieval +
//         " You have visited this site " +
//         ageCookieval;
// }