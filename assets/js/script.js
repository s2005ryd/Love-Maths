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
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}!`); //this will just do is tell the  user what button has been clicked.
            }
        })

    }


})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

