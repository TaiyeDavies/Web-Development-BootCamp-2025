// console.log("HELLO FROM OUR FIRST JS FILE!!!!");
// let total = 1 + 3;
// console.log("GOODBYE!");
// console.log(1+3);

// const userInput = prompt("Enter something");

// if(0) console.log("TRUTHY!");
// else console.log("FALSY!");

// const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];
// planets.shift();

let userInput = prompt("Enter a number");

while(true){
    userInput = prompt(userInput);
    if(userInput.toUpperCase() === "STOP") break;
}
console.log("WINNER!");
