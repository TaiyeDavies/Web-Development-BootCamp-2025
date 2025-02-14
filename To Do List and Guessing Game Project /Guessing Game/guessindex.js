
let maximum = parseInt(prompt("Enter your max number "));

while(!maximum)  maximum = parseInt(prompt("Please Enter a valid number! "));

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess (Type 'q' to quit)");
let attempts = 1;

while(parseInt(guess) !== targetNum){
    if(guess === 'q') break;
    guess = parseInt(guess);

    if(guess > maximum) guess = prompt(`Guess is too too High! Please enter a number lower than ${maximum}`);

   else if(guess > targetNum) {
        guess = prompt("Guess is too High! Enter a new guess");
        attempts++;
    }
    else if(guess < targetNum) {
        guess = prompt("Guess is too Low! Enter a new guess");
        attempts++;
    }
    else guess = prompt("Please Enter a number of type 'q' to quit");
}

if(guess === 'q') console.log("YOU HAVE QUIT!!");
else {
    console.log(`You got the guess with ${attempts} attempt(s)!`);
    console.log(`The guess was ${guess}`);
}
