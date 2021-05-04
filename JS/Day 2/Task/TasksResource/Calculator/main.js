var result;
var operator;

function EnterNumber(val) {
    result = document.getElementById("Answer").value;
    if (result.length < 20) {
        document.getElementById("Answer").value += val;
    }
}

function EnterEqual() {
    // var x = document.getElementById("Answer").value;
    // var y = eval(x);
    // document.getElementById("Answer").value = y;
    var sum = document.getElementById("Answer").value;
    if (sum) {
        document.getElementById("Answer").value = eval(sum);
    }
}

function EnterOperator(val) {
    operator = document.getElementById("Answer").value += val;
}

function EnterClear() {
    document.getElementById("Answer").value = "";
}