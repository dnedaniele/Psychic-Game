
// still missing:
// limited number of turns 10 and counting the scores and left and done guesses

var wins = 0;

var losses = 0;

var GuessesLeft = 10;

var userLettguessed = [];

// Creates an array that lists out all of the options
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r','s','t','u', 'v', 'x', 'y', 'w', 'z'];

// Collect the user's response and convert to lower case. (collect from the document.onkey)
document.onkeyup = function () {
    var userguess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    console.log(userguess);
   
 

    // Randomly chooses a choice from the options array. This is the Computer's guess.


    var computerGuess = letters[Math.floor(Math.random()*letters.length)];

     
      //computerGuess = letters[Math.floor(Math.random() * i)]; 

    console.log(computerGuess);
// compare USer Guess and Computer random input === // Win/lose conditions:
    if (userguess === computerGuess) {
        wins++;
        alert('you win: ' + wins);
    } else {
        losses++, GuessesLeft--;
        alert('you loose: ' + losses);
        
// show letters guessed

        userLettguessed.push(userguess);
        document.getElementById("youGuessedsoFar").innerHTML = userLettguessed;
        // (elements.join())
        }

    // each time the userclick (document.onkeyup) --GuessesLeft and useruguessnumb++

    var html = '<h3>Press any key to start the game ;)</h3>' + '<p >Wins: ' + wins + '</p>' + '<p>Losses: ' + losses + '</p>' +
        '<p>Guesses Left: ' + GuessesLeft + '</p>' 

        document.querySelector('#game').innerHTML = html;
} 