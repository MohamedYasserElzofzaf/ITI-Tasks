// associativeArray
var asArray = [];
// paramatersInQueryString
var string = "";
var i;
var url = document.location.href;
var urlRep = url.replace("%", "@");
urlRep = urlRep.replace("+", " ");

string = urlRep.split("?")[1].split("&");

for (i = 0; i < string.length; i++) {
    asArray[string[i].split("=")[0]] = string[i].split("=")[1];
}

document.getElementById("gName").innerHTML = asArray["name"];
document.getElementById("gJob").innerHTML = asArray["JobTitle"];
document.getElementById("gaddress").innerHTML = asArray["address"];
document.getElementById("ggender").innerHTML = asArray["gender"];
document.getElementById("gemail").innerHTML = asArray["email"];
document.getElementById("gmobNum").innerHTML = asArray["mobile"];