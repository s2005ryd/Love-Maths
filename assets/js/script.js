// Remember that an event listener is code that listens for a  particular event to happen as its name suggests.
// An event could be a mouse click, a key press,  the window resizing and all manner of things.
// The code that an event listener  executes is called an event handler.
// In this video we're going to add two  kinds of event listeners.
// The first, is code that will be executed when the page has  finished loading. And the second kind, which is
// going to be part of the event handler code of the  first one, will be listening for button clicks. //

document.addEventListener("DOMContentLoaded", function() {
// let buttons equals document get elements by tag name, and  the tag name that we're looking for is button.
// So remember that we have five buttons in our  HTML file. We have four game buttons,
// and then one submit button. And what we're  doing here is using the get elements by tag
// name method to return all of those  buttons. And you can see the tag
// name that we're looking for is button which  corresponds to the name of the HTML element.
    let buttons = document.getElementsByTagName("button");

//And we can then iterate through that array. You're probably familiar with using this syntax to iterate through an array.
// So the first thing that we're doing is we're setting i to zero.
// Then, we're checking to see if i is less  than the length of our buttons array
// and on every iteration we're incrementing i  by one. We're not going to use that syntax, however.
// We're going to use a slightly more modern  version of the syntax for let button of buttons.
// So this syntax is more modern, what it's going  to do is go through our buttons array and return
// each element in the array which will be stored in  that variable button on each iteration.
// This is convenient because it means we don't have to use  index notation to speak to elements in the array,
// and it just reads cleaner for humans.
    for (let button of buttons){
        button.addEventListener("click", function() {
            // This is the code that will run when the button is clicked.
            // The first thing that we want to do is check to see if the button that was clicked has a data type of 'submit'.
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer(); // Call the checkAnswer function when the submit button is clicked
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType); // Call the runGame function with the game type
                // This will run the game with the type specified by the button clicked.
                alert(`You clicked ${gameType}!`); //this will just do is tell the  user what button has been clicked.
            }
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer(); // Call the checkAnswer function when the enter key is pressed
        // This is the code that will run when a key is pressed in the answer box.
        // The first thing that we want to do is check to see if the key that was pressed was the enter key.
        if (event.key === "Enter") {
            checkAnswer(); // Call the checkAnswer function when the enter key is pressed
        }
    }

// The first thing is that we want an addition  game to start as soon as the page is loaded.
//It's going to be our default game. So we need to  add that to our dom content loaded event listener.
//So inside that event listener  but outside of the for loop,
//we're going to run game and the  game type is going to be addition.
//What we also need to do now, is in our button  event listeners instead of displaying
//an alert when the user clicks on the button we  want it to actually call the run game function.
    runGame("addition");
    // This will start the addition game when the page loads.

})

/** 
 * Docstrings are used to describe functions, they should go right above where the function name is declared. 
 * The main game 'loop' called when the script is first loaded
 * and after the user's answer has been processed
 * if you call this function somewhere else in the file,
and as you can see when I hover over this call to the function, my function description appears in the pop-up.
A regular comment won’t do this.
This is why docstrings for JavaScript functions are so useful, as you can get a quick reminder
about what a function does without having to find where it was actually defined within the file.
*/
function runGame(gameType) { // This function will start the game based on the type passed in. 

    document.getElementById("answer-box").value = ""; // Clears the answer box and sets the value to an empty string
    document.getElementById("answer-box").focus(); // Sets the focus to the answer box so the user can start typing immediately
    let num1 = Math.floor(Math.random() * 25) + 1; // Generates a random number between 1 and 25
    let num2 = Math.floor(Math.random() * 25) + 1; // Generates a random number between 1 and 25

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2); // Calls the function to display an addition question
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2); // Calls the function to display a multiplication question
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2); // Calls the function to display a subtraction question   
    } else { 
        alert(`unknown game type: ${gameType}`); // Alerts the user if the game type is unknown
        throw `Unknown game type: ${gameType}. Aborting!`; // Throws an error if the game type is not recognized
    }

}

    /** This checks the answer against the first element in the returned calculateCorrectAnswer array */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value); // Gets the user's answer from the input box
    let calculatedAnswer = calculateCorrectAnswer(); // Calls the function to calculate the correct answer
    let isCorrect = userAnswer === calculatedAnswer[0]; // Compares the user's answer to the calculated answer

    if (isCorrect) {
        alert("Hey! You got it right! :D"); // Alerts the user if the answer is correct
        incrementScore(); // Calls the function to increment the score
     } else {
        alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`); // Alerts the user if the answer is incorrect
        incrementWrongAnswer(); // Calls the function to increment the wrong answer tally}
     }
        runGame(calculatedAnswer[1]); // Calls the runGame function with the game type from the calculated answer

}
    /** Get's the opernds (the numbers) and the operator (plus, minus etc)
     * directly from the DOM
     * and checks if the answer is correct.
     */
function calculateCorrectAnswer() {
    // This function retrieves the operands and operator from the DOM
    // and calculates the correct answer based on the operator.
    let operand1 = parseInt(document.getElementById("operand1").innerText); // Gets the first operand from the DOM
    let operand2 = parseInt(document.getElementById("operand2").innerText); // Gets the second operand from the DOM
    let operator = document.getElementById("operator").innerText; // Gets the operator from the DOM

    if (operator === "+") {
        return [operand1 + operand2, "addition"]; // Returns the correct answer and the game type
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"]; // Returns the correct answer and the game type{
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"]; // Returns the correct answer and the game type
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`; // Throws an error if the operator is not recognized
    }

}
/** Gets the current score from the DOM and increments it by 1 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText); // Gets the current score from the DOM
    document.getElementById("score").innerText = ++oldScore; // Updates the score in the DOM

}


/** Gets the current tally of incorrec answers from the DOM and increments it by 1 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText); // Gets the current score from the DOM
    document.getElementById("incorrect").innerText = ++oldScore; // Updates the score in the DOM

}
function displayAdditionQuestion(operand1, operand2) {
    
    document.getElementById("operand1").textContent = operand1; // Displays the first operand
    document.getElementById("operand2").textContent = operand2; // Displays the second operand
    document.getElementById("operator").textContent = "+"; // Displays the operator
}

function displaySubtractQuestion(operand1, operand2) {
    
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;  // Displays the first operand
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;  // Displays the second operand
    document.getElementById("operator").textContent = "-"; // Displays the operator

}

function displayMultiplyQuestion(operand1, operand2) {
    
    document.getElementById("operand1").textContent = operand1; // Displays the first operand
    document.getElementById("operand2").textContent = operand2; // Displays the second operand
    document.getElementById("operator").textContent = "x"; // Displays the operator

}

