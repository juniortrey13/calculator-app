const display = document.querySelector('.display');
const buttons = document.querySelector('.buttons button');

buttons.forEach(button =>{ // a method that can be used on a NodeList to iterate over each item in the list.
    button.addEventListener('click', ()=>{ // a method that attaches an event listener to a specific element - in this we added 'click' followed by an arrow function.
        const buttonText = button.textContent;
        display.textContent += buttonText;
    });
});

