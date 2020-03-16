const display = document.querySelector('.display');

document.querySelector('.clear').addEventListener('click', clear);
function clear() {
    display.value = " ";         
}

document.querySelectorAll('.digit')
   .forEach( button => button.addEventListener('click' , digitPressed));
function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll('.operator')
   .forEach( button => button.addEventListener('click' , operatorsPressed));
function operatorsPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.equal').addEventListener('click', calculate);
function calculate() {
    display.value = eval(display.value);        
}

