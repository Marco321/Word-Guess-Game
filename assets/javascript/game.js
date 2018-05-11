// Global Variables
var word = ["steelers","juventus","lakers"];

var random = Math.floor(Math.random() * 3);

var chosenWord = word[random];

var answerDashes = []

var wrongLetters = []

var wins = 0;
var losses = 0;
var guessesLeft = 5;

var comma = ",";
var space =" ";

var correctLetters = []

for (i = 0; i < chosenWord.length; i++){
  console.log(chosenWord[i]);
};

for (i = 0; i < chosenWord.length; i++){
    answerDashes[i] = "_";
};

var dashesNoComma = answerDashes.join(" ");

console.log(random);
console.log(chosenWord);
console.log(chosenWord.length);

document.onkeyup = function(event) {
    var userGuess = event.key;
    
    wrongLetters.push(userGuess);
    var spaceWrongLetters = wrongLetters.join(space);

    console.log(userGuess);

    for (i=0; i < chosenWord.length; i++) {
        if (userGuess == chosenWord[i]) {
            console.log("correct");
            console.log(i);
            break;
            answerDashes[i] = userGuess;

            // userGuess == correctLetters;
            // console.log(correctLetters);
            // dashesNoComma[i] = userGuess;
            // dashesNoComma.replace([i],"sad" )
            // dashesNoComma[i] = userGuess;
            dashesNoComma.replace([i],userGuess);
            wins++;
        }; 
    };

    var html = 
    "<p>The word is: " + dashesNoComma + "</p>" +
    "<p> User Guesses: " + spaceWrongLetters + "</p>" +
    "<p>You chose: " + userGuess + "</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>";


  document.querySelector("#game").innerHTML = html;


};