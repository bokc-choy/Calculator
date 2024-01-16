let num1, num2, operator;
const arr = [];

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
    switch(operator){
        case 'add':
            add(A, B);
        break;

        case 'subtract':
            subtract(A, B);
        break;

        case 'multiply':
            multiply(A, B);
        break;

        case 'divide':
            divide(A, B);
        break;
    }
}


function display(){
    const screen = document.querySelector(".stuff");
    screen.textContent = arr.join('')
    console.log(arr);
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
    arr.push(0);
    display();
})
btn1.addEventListener('click', ()=> {
    arr.push(1);
    display();
})
btn2.addEventListener('click', ()=> {
    arr.push(2)
    display();
})
btn3.addEventListener('click', ()=> {
    arr.push(3)
    display();
})
btn4.addEventListener('click', ()=> {
    arr.push(4)
    display();
})
btn5.addEventListener('click', ()=> {
    arr.push(5);
    display();
})
btn6.addEventListener('click', ()=> {
    arr.push(6);
    display();
})
btn7.addEventListener('click', ()=> {
    arr.push(7);
    display();
})
btn8.addEventListener('click', ()=> {
    arr.push(8);
    display();
})
btn9.addEventListener('click', ()=> {
    arr.push(9);
    display();
})

// function buttons
btndiv.addEventListener('click', ()=> {

})
btnmul.addEventListener('click', ()=> {
    
})
btnsub.addEventListener('click', ()=> {
    
})
btnadd.addEventListener('click', ()=> {
   
})
btnequ.addEventListener('click', ()=> {
   
})
btnclear.addEventListener('click', ()=> {
   
})





/*function setNum1(){
    initial = 0;
    initial * 10 + newval;
    initial = newval;
}*/
