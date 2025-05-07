const display = document.querySelector('.display');
const buttonsContainer = document.querySelector('.buttons'); // Select the container div
const allButtons = buttonsContainer.querySelectorAll('button'); // Select buttons within the container

console.log('Number of buttons found:', allButtons.length);

allButtons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        display.textContent += buttonText;
    });
});

const clearButton = document.querySelector('.clear-button');

clearButton.addEventListener('click', ()=>{
    display.textContent = '';
    console.log('Display Cleared');
});

let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

const operatorButtons = document.querySelectorAll('.addition-button', '.subtraction-button', 'multiplication-button', 'division-button');

