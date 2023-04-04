let num1 = '';
let num2 = '';
let operator = '';
let result = '';
let tempStr1 = '';
let tempStr2 = '';
let resultRound = 0;
let curr = 1;
let currentOperator='';

const display = document.querySelector(".display");
const num = document.querySelectorAll(".number");
const op = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const signChange = document.querySelector(".signChange");

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

function operate(operator, numA, numB) {
    numA = parseFloat(numA);
    numB = parseFloat(numB);
    console.log(numA);
    console.log(numB);
    if (operator == '') {
        return '0';
    }
    if (operator == "+") {
        return add(numA, numB)
    }
    if (operator == "-") {
        return subtract(numA, numB)
    }
    if (operator == "*") {
        return multiply(numA, numB)
    }
    if (operator == "/") {
        if (numB === 0) {
            console.log("helloooo");
            return "Error"
        }
        return divide(numA, numB)
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
                curr = 1;
            }
            else {
                return;
            }
        } else if (operator === '') {
            if (tempStr1 != 2) {
                num1 = num1.concat('', e.target.textContent);
                updateDisplay(num1);
                curr = 1;
            } else {
                return;
            }
        }
        else {
            if (tempStr2 != 2) {
                num2 = num2.concat('', e.target.textContent);
                updateDisplay(num2);
                curr = 2;
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
    //op.forEach(btn =>(btn.addEventListener('click',console.log("hhhh")

    op.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (num2 != '') {
                result = operate(operator, num1, num2);
                operator = e.target.textContent;
                //currentOperator = operator;

                num2 = '';
                num1 = result.toString();
                updateDisplay(result);
            } else if (num1 != '') {
                operator = e.target.textContent;
                //currentOperator = operator;

            }
        });

        btn.addEventListener('click', ()=>{
            //console.log(currentOperator, operator);
            op.forEach(but =>{
                but.classList.remove("current");
            });
            btn.classList.add("current");
        });
    });


    signChange.addEventListener('click', sign);

    equals.addEventListener("click", () => {
        console.log("-----equal function ------")

        if (num2 != '') {
            result = operate(operator, num1, num2);
        }
        else {
            return;
        }
        if (typeof (result) == "number") {
            resultRound = result.toFixed(2);
        }
        updateDisplay(resultRound.toString());

        num1 = resultRound.toString();
        num2 = '';
        operator = '=';
        removeClass(op);

        // console.log("current op: " + operator);
        // console.log("num1: " + num1);
        // console.log("num2: " + num2);
        // console.log("result: " + result);
    });

}

function sign() {
    if (curr == 1) {
        if (num1.includes("-")) {
            num1 = num1.slice(1);
        }
        else {
            num1 = "-" + num1;
        }
        updateDisplay(num1);
        return;
    }

    if (num2.includes("-")) {
        num2 = num2.slice(1);
    }
    else {
        num2 = "-" + num2;
    }
    updateDisplay(num2);
    return;

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

function removeClass(str) {
    str.forEach(btn=>{
        btn.classList.remove("current");
    })
}

function clear() {
    display.textContent = '0';
    num1 = '';
    num2 = '';
    operator = '';
    result = '0';
    removeClass(op);
}

clearBtn.addEventListener('click', clear);
calc();



