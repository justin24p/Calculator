let clearButton = document.getElementById("blue");
let deleteButton = document.getElementById("green");
console.log(0.11 + 0.11);
//Operations Button
let multiplicationButton = document.getElementById("multiply");
let addButton = document.getElementById("plus");
let divideButton = document.getElementById("divide");
let subtractButton = document.getElementById("minus");
let equalButton = document.getElementById("equal");

//Num pad/Screen
let screenCur = document.getElementById("currentOperation");
let screenPrev = document.getElementById("lastOperation");
let buttons = document.querySelectorAll(".smalButtons");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (screenCur.textContent === "0") {
            screenCur.textContent = "";
        }
        if (screenCur.textContent.includes(".") && button.textContent === ".") {
            screenCur.textContent += "";
        } else {
            screenCur.textContent += button.textContent;
        }
    });
});

// clear
clearButton.addEventListener("click", () => {
    screenCur.textContent = 0;
    screenPrev.textContent = "";
});

//delete
deleteButton.addEventListener("click", () => {});

//add
addButton.addEventListener("click", () => {});

function add() {}

function subtract() {}

function divide() {}

function multiplication() {}
