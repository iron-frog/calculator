let num1 = '';
let num2 = '';
let operator = '';
let equation = '';
let result = '';

const display = document.querySelector(".display");
const num = document.querySelectorAll(".number");
const op = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator == '') {
        return '0';
    }
    if (operator == "+") {
        return add(num1, num2)
    }
    if (operator == "-") {
        return subtract(num1, num2)
    }
    if (operator == "*") {
        return multiply(num1, num2)
    }
    if (operator == "/") {
        if (num2 == 0) {
            return "Error"
        }
        return divide(num1, num2)
    }

}

function calc() {
    num.forEach(btn => (btn.addEventListener('click', (e) => {
        if (operator == '=') {
            num1 = ''.concat('', e.target.textContent);
            operator = '';
            updateDisplay(num1);
            console.log(num1);

        } else
            if (operator === '') {

                num1 = num1.concat('', e.target.textContent);
                updateDisplay(num1);

            }
            else {
                num2 = num2.concat('', e.target.textContent);
                updateDisplay(num2);

            }
        console.log("current op: " + operator);
        console.log("num1: " + num1);
        console.log("num2: " + num2);
        console.log("result: " + result);

    })));
    op.forEach(btn => (btn.addEventListener('click', (e) => {
        if (num2 != '') {
            //console.log("hello");
            result = operate(operator, parseInt(num1), parseInt(num2));
            operator = e.target.textContent;
            num2 = '';
            num1 = result;
            updateDisplay(result);
        } else if (num1 != '') {
            operator = e.target.textContent;
        }

        console.log("current op: " + operator);
        console.log("num1: " + num1);
        console.log("num2: " + num2);
        console.log("result: " + result);


    })));

    equals.addEventListener("click", () => {
        console.log(operator, num1, num2);

        result = operate(operator, parseInt(num1), parseInt(num2));
        updateDisplay(result);
        num1 = result.toString();
        num2 = '';
        operator = '=';
        //result = ''
        console.log("current op: " + operator);
        console.log("num1: " + num1);
        console.log("num2: " + num2);
        console.log("result: " + result);
    });

    equation = num1 + operator + num2;
    console.log(equation);
    checkError(result);

}

function checkError(str) {
    if (str == 'Error') {
        clear();
    }
}
function updateDisplay(e) {
    display.textContent = e;
}

function returnOperator(e) {
    return e.target.textContent;
}

function clear() {
    display.textContent = '0';
    num1 = '';
    num2 = '';
    operator = '';
    result = '0';
}

clearBtn.addEventListener('click', clear);
calc();
