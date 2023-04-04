let num1 = '';
let num2 = '';
let operator = '';
let equation = '';
let result = '';
let tempStr1 = '';
let tempStr2 = '';
let resultRound =0;

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
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    console.log("TypE: " +typeof(num2));
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
        if (num2 === 0) {
            console.log("helloooo");
            return "Error"
        }
        return divide(num1, num2)
    }

}

function calc() {
    num.forEach(btn => (btn.addEventListener('click', (e) => {
        tempStr1 = checkDecimal(num1.concat('', e.target.textContent));
        tempStr2 = checkDecimal(num2.concat('', e.target.textContent));

        if (operator == '=') {
            if (tempStr1 != 2) {
                num1 = ''.concat('', e.target.textContent);
                operator = '';
                updateDisplay(num1);
                console.log(num1);
            }
            else {
                return;
            }
        } else if (operator === '') {
            if (tempStr1 != 2) {
                num1 = num1.concat('', e.target.textContent);
                updateDisplay(num1);
            } else {
                return;
            }
        }
        else {
            if (tempStr2 != 2) {
                num2 = num2.concat('', e.target.textContent);
                updateDisplay(num2);
            }
            else {
                return;
            }
        }
        console.log("current op: " + operator);
        console.log("num1: " + num1);
        console.log("num2: " + num2);
        console.log("result: " + result);



    })));
    op.forEach(btn => (btn.addEventListener('click', (e) => {
        if (num2 != '') {
            //console.log("hello");
            result = operate(operator, num1, num2);
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
        //console.log(operator, num1, num2);

        if(num2 !=''){
            result = operate(operator, num1, num2);
        }
        else{
            result = 0;
        }
        if(typeof(result)=="number"){
            console.log(result.toFixed(2));
            resultRound = result.toFixed(2);
        }
        
        updateDisplay(resultRound);
        console.log(result);

        num1 = result.toString();
        num2 = '';
        operator = '=';
    
        console.log("current op: " + operator);
        console.log("num1: " + num1);
        console.log("num2: " + num2);
        console.log("result: " + result);
    });

}

function checkDecimal(str) {
    let sum = 0;
    for (let i in str) {
        if (str[i] == '.') {
            sum += 1;
        }
    }
    return sum;
}

function checkError(str) {
    if (str == 'Error') {
        console.log("hhh")

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
