
var counter = 0;
var userNumber = 10;
var maxTries = 5;
var randomNumber = Math.floor(Math.random() * userNumber) +1;

while (numberOfAttempts != randomNumber ) {

    var numberOfAttempts = prompt("Please pick up a number between 1 and " + userNumber);
    counter+= 1
    if (counter > maxTries) {
    
        document.write("You have no more tries left")
        break
    }
    if(numberOfAttempts === randomNumber){
        document.write("You have the correct number")
        document.write("<p>The random number was " + randomNumber + "</p>");
        document.write("<p> it took you " + counter + "numberOfAttempts to get the correct number </p>");
    }
}
console.log("END")
