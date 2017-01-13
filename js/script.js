var num1;
var operator;
var numberClicked = document.getElementById("output");

function button(num) {
    var numPressed = Number(num);
    var theNum = document.createTextNode(numPressed);
    numberClicked.appendChild(theNum);
}
function clear() {
    numberClicked.textContent = "";
}
function divide() {
    num1 = Number(numberClicked.textContent);
    operator = "divide";
    numberClicked.textContent = "";
}
function multiply() {
    num1 = Number(numberClicked.textContent);
    operator = "multiply";
    numberClicked.textContent = "";
}
function subtract() {
    num1 = Number(numberClicked.textContent);
    operator = "subtract";
    numberClicked.textContent = "";
}
function add() {
    num1 = Number(numberClicked.textContent);
    operator = "add";
    numberClicked.textContent = "";
}
function decimal() {
    var theNum = document.createTextNode(".");
    numberClicked.appendChild(theNum);
}

function equals() {
    var answer;
    var num2 = Number(numberClicked.textContent);
    switch (operator) {
    case "divide":
        answer = num1 / num2;
        numberClicked.textContent = answer;
        break;
    case "multiply":
        answer = num1 * num2;
        numberClicked.textContent = answer;
        break;
    case "subtract":
        answer = num1 - num2;
        numberClicked.textContent = answer;
        break;
    case "add":
        answer = num1 + num2;
        numberClicked.textContent = answer;
        break;
    default:
        numberClicked.textContent = "ERROR";
    }
}

document.getElementById("one").onclick = function () { button(1);};
document.getElementById("two").onclick = function () { button(2);};
document.getElementById("three").onclick = function () { button(3);};
document.getElementById("four").onclick = function () { button(4);};
document.getElementById("five").onclick = function () { button(5);};
document.getElementById("six").onclick = function () { button(6);};
document.getElementById("seven").onclick = function () { button(7);};
document.getElementById("eight").onclick = function () { button(8);};
document.getElementById("nine").onclick = function () { button(9);};
document.getElementById("zero").onclick = function () { button(0);};
document.getElementById("clear").onclick = function () { clear();};
document.getElementById("divide").onclick = function () { divide();};
document.getElementById("multiply").onclick = function () { multiply();};
document.getElementById("subtract").onclick = function () { subtract();};
document.getElementById("add").onclick = function () { add();};
document.getElementById("equals").onclick = function () { equals();};
document.getElementById("decimal").onclick = function () { decimal();};
