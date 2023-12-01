let clearButton = document.getElementById("blue");
let deleteButton = document.getElementById("green");
let numPad = document.querySelectorAll(".smalButtons");

// Operations Button
let multiplicationButton = document.getElementById("multiply");
let addButton = document.getElementById("plus");
let divideButton = document.getElementById("divide");
let subtractButton = document.getElementById("minus");
let equalButton = document.getElementById("equal");

// Num pad/Screen
let CurrentScreenContent = document.getElementById("currentOperation");
let PreviousScreenContent = document.getElementById("lastOperation");
let NumberButtons = document.querySelectorAll(".smalButtons");

let firstNum = null;
let secondNum = null;
let currentOperator = null;
let expectingSecondVal = false;

// operator functions
function sum(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function multi(num1, num2) {
    return num1 * num2;
}
// Operate Main Function
function operator(operator, num1, num2) {
    if (operator === "sum") {
        return String(sum(num1, num2));
    } else if (operator === "subtract") {
        return String(sub(num1, num2));
    } else if (operator === "divide") {
        return String(div(num1, num2));
    } else if (operator === "multiply") {
        return String(multi(num1, num2));
    }
}

//num pad logic
numPad.forEach((button) => {
    button.addEventListener("click", () => {
        //

        if (expectingSecondVal === true) {
            CurrentScreenContent.textContent = "";
            expectingSecondVal = false;
        }

        if (
            CurrentScreenContent.textContent.includes(".") &&
            button.textContent === "."
        ) {
            CurrentScreenContent.textContent += "";
        } else {
            CurrentScreenContent.textContent += button.textContent;
        }
        if (currentOperator !== null) {
            secondNum = parseFloat(CurrentScreenContent.textContent);
        }
        console.log(secondNum);

        // if operator not nulll / when button.clicked curscreen = "" then type full num
        // after operator is presssed set second entry to num2 if either = or another operator is pressed
        // evalute num1 and num 2!!
    });
});

//operation listeners
addButton.addEventListener("click", () => {
    if (firstNum && secondNum) {
        let result = operator(currentOperator, firstNum, secondNum);
        CurrentScreenContent.textContent = result;
        secondNum = null;
    } else {
        firstNum = parseFloat(CurrentScreenContent.textContent);
    }
    expectingSecondVal = true;
    currentOperator = "sum";
    console.log(currentOperator);

    // prev oper = null
    // cur oper = null
    // if != prev oper
    // if is prev oper then operate(firstnum, second num)
    //  prev oper = cur oper
    // cur u
});

divideButton.addEventListener("click", () => {
    if (firstNum !== null && currentOperator === "divide" && secondNum === 0) {
        alert("Cannot divide by zero");
        clearCalculator();
        return;
    }

    if (firstNum && secondNum) {
        let result = operator(currentOperator, firstNum, secondNum);
        CurrentScreenContent.textContent = result;
        secondNum = null;
    } else {
        firstNum = parseFloat(CurrentScreenContent.textContent);
    }
    expectingSecondVal = true;
    currentOperator = "divide";
});

subtractButton.addEventListener("click", () => {
    if (firstNum && secondNum) {
        let result = operator(currentOperator, firstNum, secondNum);
        CurrentScreenContent.textContent = result;
        secondNum = null;
    } else {
        firstNum = parseFloat(CurrentScreenContent.textContent);
    }
    expectingSecondVal = true;
    currentOperator = "subtract";
});

multiplicationButton.addEventListener("click", () => {
    console.log("working");
    if (firstNum && secondNum) {
        let result = operator(currentOperator, firstNum, secondNum);
        CurrentScreenContent.textContent = result;
        secondNum = null;
    } else {
        firstNum = parseFloat(CurrentScreenContent.textContent);
    }
    expectingSecondVal = true;
    currentOperator = "multiply";
});
//equal button
equalButton.addEventListener("click", () => {
    if (firstNum !== null && currentOperator !== null) {
        let result;
        if (secondNum !== null) {
            if (currentOperator === "divide" && secondNum === 0) {
                alert("Cannot divide by zero");
                clearCalculator();
                return;
            }
            result = operator(currentOperator, firstNum, secondNum);
        } else {
            // If secondNum is null, repeat the last operation with firstNum
            result = operator(currentOperator, firstNum, firstNum);
        }

        CurrentScreenContent.textContent = result;

        // Update state for potential consecutive operations
        firstNum = parseFloat(result);
        secondNum = null;
        currentOperator = null;
        expectingSecondVal = true;
    }
});

// clear / delete button
function clearCalculator() {
    CurrentScreenContent.textContent = "0";
    expectingSecondVal = true;
    firstNum = null;
    secondNum = null;
    currentOperator = null;
}

clearButton.addEventListener("click", clearCalculator);
deleteButton.addEventListener("click", () => {
    CurrentScreenContent.textContent = CurrentScreenContent.textContent.slice(
        0,
        -1
    );
});
