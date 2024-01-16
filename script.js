let num = 1;
let operator;
const arr1 = [];
const arr2 = [];

function add(A, B){
    return A + B;
}

function subtract(A, B){
    return A - B;
}

function multiply(A, B){
    return A * B;
}

function divide(A, B){
    if(B == 0) return "ERROR";
    else return A/B;
}

function operate(A, B, operator){
    let numA = parseInt(A);
    let numB = parseInt(B);
    let result;
    switch(operator){
        case '+':
            result = add(numA, numB);
        break;

        case '-':
            result = subtract(numA, numB);
        break;

        case '*':
            result = multiply(numA, numB);
        break;

        case '/':
            result = divide(numA, numB);
        break;
    }
    return Math.round(result * 100)/100;
}

function display(){
    const screen = document.querySelector(".stuff");
    let arrFull = [arr1.join(''), operator, arr2.join('')];
    screen.textContent = arrFull.join('')
    console.log(arrFull);
}

function solve(){
    let num1 = arr1.join('');
    let num2 = arr2.join('');
    arr1.length = 0;
    arr2.length = 0;
    arr1.push(operate(num1, num2, operator));
}

const btn0 = document.getElementById("0");
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btndiv = document.querySelector(".divide");
const btnmul = document.querySelector(".multiply");
const btnsub = document.querySelector(".subtract");
const btnadd = document.querySelector(".add");
const btnequ = document.querySelector(".equal");
const btnclear = document.querySelector(".clear");

btn0.addEventListener('click', ()=> {
    if(num == 1) arr1.push(0);
    else arr2.push(0);
    display();
})
btn1.addEventListener('click', ()=> {
    if(num == 1) arr1.push(1);
    else arr2.push(1);
    display();
})
btn2.addEventListener('click', ()=> {
    if(num == 1) arr1.push(2);
    else arr2.push(2);
    display();
})
btn3.addEventListener('click', ()=> {
    if(num == 1) arr1.push(3);
    else arr2.push(3);
    display();
})
btn4.addEventListener('click', ()=> {
    if(num == 1) arr1.push(4);
    else arr2.push(4);
    display();
})
btn5.addEventListener('click', ()=> {
    if(num == 1) arr1.push(5);
    else arr2.push(5);
    display();
})
btn6.addEventListener('click', ()=> {
    if(num == 1) arr1.push(6);
    else arr2.push(6);
    display();
})
btn7.addEventListener('click', ()=> {
    if(num == 1) arr1.push(7);
    else arr2.push(7);
    display();
})
btn8.addEventListener('click', ()=> {
    if(num == 1) arr1.push(8);
    else arr2.push(8);
    display();
})
btn9.addEventListener('click', ()=> {
    if(num == 1) arr1.push(9);
    else arr2.push(9);
    display();
})

// function buttons
btndiv.addEventListener('click', ()=> {
    if(num > 1) solve();
    operator = "/";
    num++;
    display();
})
btnmul.addEventListener('click', ()=> {
    if(num > 1) solve();
    operator = "*";
    num++;
    display();
})
btnsub.addEventListener('click', ()=> {
    if(num > 1) solve();
    operator = "-";
    num++;
    display();
})
btnadd.addEventListener('click', ()=> {
    if(num > 1) solve();
    operator = "+";
    num++;
    display();
})

// equals
btnequ.addEventListener('click', ()=> {
    solve();
    operator = '';
    num = 1;
    display();
})

// clear
btnclear.addEventListener('click', ()=> {
    arr1.length = 0;
    arr2.length = 0;
    operator = '';
    num = 1;
    display();
})