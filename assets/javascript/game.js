// Global Variables
var word = ["steelers","juventus","lakers"];

var random;
var chosenWord;
var answerDashes;
var wrongLetters;
var wins = 0;
var losses = 0;
var guessesLeft;
var correctLetters;
var dashesNoComma;

function initGame() {
    random = Math.floor(Math.random() * 3);

    chosenWord = word[random];

    answerDashes = [];

    wrongLetters = [];
    guessesLeft = 5;


    correctLetters = [];
    for (var i = 0; i < chosenWord.length; i++){
      console.log(chosenWord[i]);
    };
    
    for (var i = 0; i < chosenWord.length; i++){
        answerDashes[i] = "_";
    };

    dashesNoComma = answerDashes.join("");
    
    console.log(random);
    console.log(chosenWord);
    console.log(chosenWord.length);
}

initGame();

document.onkeyup = function(event) {
    var userGuess = event.key;
    
    wrongLetters.push(userGuess);
    var spaceWrongLetters = wrongLetters.join("");

    console.log(userGuess);

    // for (var i=0; i < chosenWord.length; i++) {
    //     if (userGuess == chosenWord[i]) {
    //         console.log("correct");
    //         console.log(i);
    //         dashesNoComma[i] = userGuess;

    //         // userGuess == correctLetters;
    //         // console.log(correctLetters);
    //         // dashesNoComma[i] = userGuess;
    //         // dashesNoComma.replace([i],"sad" )
    //         // dashesNoComma[i] = userGuess;
    //         // dashesNoComma.replace([i],userGuess);
    //         wins++;
    //     }
    //     else {
    //         console.log("wrong");
    //         losses++;
    //         guessesLeft--;
    //     }
    // };

    var dashesNoCommaArr = dashesNoComma.split('');
    var foundIt = false;
    for (var i = 0; i < chosenWord.length; i++) {
        if(userGuess === chosenWord[i]) {
            foundIt = true;
            dashesNoCommaArr[i] = userGuess;
        }
    }
    dashesNoComma = dashesNoCommaArr.join('');
    if (!foundIt) {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;
        initGame();
        //anything else we need to do for a loss
    }
    if (dashesNoComma === chosenWord) {
        wins++;
        initGame();
    }
    //foundit means there was at least one match

    var html = 
    "<p>The word is: <span class='letter-spacing'>" + dashesNoComma + "</span></p>" +
    "<p> User Guesses: <span class='letter-spacing'>" + spaceWrongLetters + "</span></p>" +
    "<p>You chose: " + userGuess + "</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>";


  document.querySelector("#game").innerHTML = html;


};