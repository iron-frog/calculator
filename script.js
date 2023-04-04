let num1 ='0';
let num2 ='0';
let operator = '';
let equation = [num1, operator, num2];
let result = '0';

const display = document.querySelector(".display");
const num = document.querySelectorAll(".number");
const op = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(operator, num1, num2){
    if(operator =="+"){
        return add(num1,num2)
    }
    if(operator =="-"){
        return subtract(num1,num2)
    }
    if(operator =="*"){
        return multiply(num1,num2)
    }
    if(operator =="/"){
        return divide(num1,num2)
    }

}

function calc(){
    num.forEach(btn => (btn.addEventListener('click',(e)=>{
        if(operator ===''){
            //console.log(equation[1].match(''));
            //console.log(num1);

            num1 =num1.concat('', e.target.textContent);
            updateDisplay(num1);
            
        }
        else{
            num2 =num2.concat('', e.target.textContent);
            updateDisplay(num2);

        }
        
    })));
    op.forEach(btn => (btn.addEventListener('click', (e)=>{
        operator = e.target.textContent;
    })));

    equals.addEventListener("click", ()=>{
        console.log(operator, num1, num2);
        
        result = operate(operator,parseInt(num1),parseInt(num2));
        updateDisplay(result);
        num1 = '0';
        num2 = '0';
        operator = '';
        result = '0'
    });

}

function updateDisplay(e){
    display.textContent = e;
    return display.textContent;
}

function returnOperator(e){
    return e.target.textContent;
}


//console.log(parseInt("0123"));

calc();
