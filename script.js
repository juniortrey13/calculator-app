let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

const display = document.querySelector('.display');
const buttonsContainer = document.querySelector('.buttons'); // Select the container div
const allButtons = buttonsContainer.querySelectorAll('button'); // Select buttons within the container
const clearButton = document.querySelector('.clear-button');
const operatorButtons = document.querySelectorAll('.addition-button, .subtraction-button, .multiplication-button, .division-button');

console.log('Number of operator buttons found:', operatorButtons.length); // Add this line

operatorButtons.forEach(opButton => { // Also change the variable name for clarity
    console.log('Operator button text:', opButton.textContent); // Add this line
});

console.log('Number of buttons found:', allButtons.length);

allButtons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        display.textContent += buttonText;
    });
});

clearButton.addEventListener('click', ()=>{
    display.textContent = '';
    console.log('Display Cleared');
});

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        firstOperand = parseFloat(display.textContent);
        currentOperator = operatorButton.textContent;
        display.textContent = '';
        console.log('First Operand:', firstOperand);
        console.log('Current Operator:', currentOperator);
    });
});