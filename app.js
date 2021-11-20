const currentNumberText = document.getElementById('currentNumberScreen');
const previousNumberText = document.getElementById('lastNumberScreen');
const numbers = document.querySelectorAll('[data-number]');
const operations = document.querySelectorAll('[data-operator]');
const equals = document.querySelector('.equal');
const clearScreen = document.querySelector('.clearScreen');
const deleteNumber = document.querySelector('.delete');

// let currentNumber = '';
// let previousNumber = '';
// let result = null;
// let operation = '';

let operation = '';
let addNumber = false;

numbers.forEach((button) => {
    button.addEventListener('click', (e) => {
        currentNumberText.innerText += button.innerText;
    });
});
