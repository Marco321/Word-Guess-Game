
var word = ["Steelers","Juventus","Lakers"];

var random = Math.floor(Math.random() * 3);

var chosenWord = word[random];

var wins = 0;
var losses = 0;
var guessesLeft = 5;

console.log(random);
console.log(chosenWord);
    
// function blank() {
//     for ( )
// };

document.onkeyup = function(event) {
    var userGuess = event.key;
    


    // if (userGuess == chosenWord.charAt[i]){

    // };

    var html =
    "<p>             </p>" +
    "<p>You chose: " + userGuess + "</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>guessesLeft: " + guessesLeft + "</p>";


  document.querySelector("#game").innerHTML = html;

};