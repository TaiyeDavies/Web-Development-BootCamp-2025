
window.setTimeout(function() {
let userInput;
let listOfItems = [];


while(userInput !== "quit"){
    userInput = prompt("What would you like to do?");
    if(userInput.toLowerCase() === "quit"){ 
        console.log("OK, YOU HAVE QUIT THE APP!");
        break;
    }

    else if(userInput.toLowerCase() === "new"){
        let newItem = prompt("Enter new Todo");
        listOfItems.push(newItem);
        console.log(`${newItem} has been added to the List`);
    }
    else if(userInput.toLowerCase() === "list"){
        console.log("**********");
        for(let i = 0; i < listOfItems.length; i++){
            console.log((`${i}: ${listOfItems[i]}`));
        }
        console.log("**********");
    }
    else if(userInput.toLowerCase() === "delete"){
        let deletedIndex = parseInt(prompt("Enter index of todo to delete"));
        while(isNaN(deletedIndex) || deletedIndex < 0 || (deletedIndex > listOfItems.length - 1)) {
            deletedIndex = parseInt(prompt("Please enter a valid index!"));
            if(userInput.toLowerCase() === "quit"){ 
                console.log("OK, YOU HAVE QUIT THE APP!");
                break;
            }
        }
        let deletedItem = listOfItems.splice(deletedIndex, 1);
        console.log(`${deletedItem} at Index ${deletedIndex} has been removed from Todo`);

    }

}
}, 500);
