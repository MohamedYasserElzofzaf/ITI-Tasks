function fetch() {
    fetch("std.json")
        .then(validateResponse)
        .then(readResponse)
        .then(logResult)
        .catch(logError);
}

function validateResponse(response) {
    if (!response.ok) throw Error(response.statusText);
    return response;
}

function readResponse(response) {
    return response.json();
}

function logResult(data) {
    createTable(data);
}

function logError(data) {
    console.error(data);
}

function createTable(data) {
    var tableBody = document.getElementById("tContent");
    for (var i of data) {
        var x = i;
        var row = document.createElement("tr");
        row.innerHTML =
            "<td>" +
            x["nm"] +
            "</td><td>" +
            x["id"] +
            "</td><td>" +
            x["Date"] +
            "</td>";
        tableBody.appendChild(row);
    }
}