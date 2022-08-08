"use strict";
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var button = document.getElementById("button");
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    var numero1 = Number(input1.value);
    var numero2 = Number(input2.value);
    console.log(sum(numero1, numero2));
});
