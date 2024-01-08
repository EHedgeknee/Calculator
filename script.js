const numberButton = document.querySelectorAll('#numbers button');
const clear = document.querySelector('#clear');
const output = document.querySelector('#output p');
const equal = document.querySelector('#equal');
const operatorButton = document.querySelectorAll('.function');

let value = undefined;
let n1 = undefined;
let n2 = undefined;
let operator = undefined;
let input = false;
let answer = undefined;

function add (n1, n2) {
    return n1 + n2;
}
function subtract (n1, n2) {
    return n1 - n2;
}
function multiply (n1, n2) {
    return n1 * n2;
}
function divide (n1, n2) {
    return n1 / n2;
}

numberButton.forEach(function(element) {
    element.addEventListener('click', function() {
            output.textContent = output.textContent + element.textContent;
    });
})

clear.addEventListener('click', () => output.textContent = "");

operatorButton.forEach(function(element) {
    element.addEventListener('click', function() {
        input = !input;
        if (input)
        {
            n1 = parseInt(output.textContent);
        }
        operator = element.textContent;
        output.textContent = "";
    })
})
equal.addEventListener('click', () => {
    if (input) {
        n2 = parseInt(output.textContent);
    }
    input = !input;
    switch(operator){
        case "+":
            answer = add(n1, n2);
            break;
        case "-":
            answer = subtract(n1, n2);
            break;
        case "*":
            answer = multiply(n1, n2);
            break;
        case "/":
            answer = divide(n1, n2);
            break;
    }
            

    output.textContent = answer;
    value = undefined;
    n1 = undefined;
    n2 = undefined;
    operator = undefined;
    input = false;
    answer = undefined;
})

