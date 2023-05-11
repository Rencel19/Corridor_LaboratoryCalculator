var result = document.getElementById("result");
var num1;
var num2;
var operator;

function add() {

    operator = "+";

    num1 = parseFloat(document.getElementById("Numbers").value);

    document.getElementById("Numbers").value = "";

}

function subtract() {

    operator = "-";

    num1 = parseFloat(document.getElementById("Numbers").value);

    document.getElementById("Numbers").value = "";

}



function multiply() {

    operator = "*";

    num1 = parseFloat(document.getElementById("Numbers").value);

    document.getElementById("Numbers").value = "";

}

function divide() {

    operator = "/";

    num1 = parseFloat(document.getElementById("Numbers").value);

    document.getElementById("Numbers").value = "";

}


function equals() {

    num2 = parseFloat(document.getElementById("Numbers").value);

    var res;


    if (operator === "+") {

        res = num1 + num2;

    }

    else if (operator === "-") {

        res = num1 - num2;

    }

    else if (operator === "*") {

        res = num1 * num2;
    }

    else if (operator === "/") {

        res = num1 / num2;
    }

    document.getElementById("result").innerHTML = res;

}