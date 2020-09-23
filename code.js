const userInput = document.getElementById('input');
console.log(userInput);

const buttonInput = document.getElementById('buttonInput');

//get element by id is linking the JS to HTML
const button = document.getElementById('submitName');


button.addEventListener('click', () => {
    // post-click logic goes here! 
    //The console log is printing the input's string value to the h1 where name goes!
    console.log(userInput.value)
buttonInput.textContent = userInput.value
})



/* const userInput = document.getElementById('input');
console.log(userInput);

const buttonInput = document.getElementById('buttonInput');

//get element by id is linking the JS to HTML
const button = document.getElementById('submitName');


button.addEventListener('click', () => {
    // post-click logic goes here! 
    //The console log is printing the input's string value to the h1 where name goes!
    console.log(userInput.value)
buttonInput.textContent = userInput.value
*/