
// still missing:
// limited number of turns 10 and counting the scores and left and done guesses

var wins = 0;

var losses = 0;

var GuessesLeft = 0;

var userGuessnumb = 0;

// Creates an array that lists out all of the options
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r','s','t','u', 'v', 'x', 'y', 'w', 'z'];

// Collect the user's response and convert to lower case. (collect from the document.onkey)
document.onkeyup = function () {
    var userguess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    console.log(userguess);

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    
    // var computerGuess = letters[Math.floor(Math.random()*letters.lenght)];

     for (var i = 0; i < 10; i++) {
      computerGuess = letters[Math.floor(Math.random() * i)]; 

    console.log(computerGuess);
// compare USer Guess and Computer random input === // Win/lose conditions:
    if (userguess === computerGuess) {
        wins++;
        alert('you win: ' + wins);
    } else {
        losses++;
        alert('you loose: ' + losses);
        }

    // each time the userclick (document.onkeyup) --GuessesLeft and useruguessnumb++

    var html = '<h3>Press any key to start the game ;)</h3>' + '<p >Wins: ' + wins + '</p>' + '<p>Losses: ' + losses + '</p>' +
        '<p>Guesses Left: ' + GuessesLeft + '</p>' + '<p>You guesses so far: ' + userGuessnumb + '</p>'
}}