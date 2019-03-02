//set up the initial variables get the random word to show up first

var numberGuess = 12;
var lives = 3;
var words = [
    //add hints at a later date
    "spiderman",
    "inuyasha",
    "naruto",
    "wolverine",
    "batman",
    "dragonball",
    "rogue",
    "thor",
    "storm",
    "cyclops",
    "gambit",
    "flash",
    "natsu",
    "jostar",
    "superman"
];
//gets a random word from the words array
var word = words[Math.floor(Math.random() * words.length)];
//stores the word for later
var wordGuess = word;
//needed to change the
var space = '_';
//needed to store the wrong letters 
var wrong = [];
//grabs the divs from HTML
var wordResult = document.getElementById('wordResult');
var wrongLetters = document.getElementById('wrongLetters');
var livesNumber = document.getElementById('livesNumber');
var guessNumber = document.getElementById('numberGuesses');
//puts the current number to the screen
livesNumber.textContent = lives;
guessNumber.textContent = numberGuess;
//Global count function
var totalCount = 0;
var tempWord = new Array();
var tempJoin;


function wordBlank() {
    //makes the word into an array
    //need to 
    word = word.split('');
    //iterates over the word array
    for (let i = 0; i < word.length; i++) {
        //replaces each letter with an underscore and space
        word[i] = space;
    }
    word = word.join('');
    //puts the new 'word' onto the page
    wordResult.textContent = word;
};

wordBlank();
//it's here so that the tempWord doesn't restart at zero
tempWord = word.split('');

document.onkeyup = function () {
    //1. Create the variables
    var userGuess = event.key;
    //checks to see if the code is working
    console.log(userGuess);
    console.log(wordGuess);


    function guessToScreen() {
        //iterate over the word again
        var counter = 0;


        //the word has to be made into an array
        console.log(word);


        for (var i = 0; i < wordGuess.length; i++) {

            //check to see if the letter guessed is one of the letters of the word
            if (wordGuess[i] === userGuess) {
                console.log('You got one!');

                //for the userGuess to take the place of word[i]
                tempWord[i] = userGuess;
                //turns the word array back into a string
                tempJoin = tempWord.join('');
                wordResult.textContent = tempJoin;
                //console.log(word);
                counter++;
                totalCount++;
                console.log(counter);
                console.log(totalCount);
                //console.log(wordGuess[i]);
                console.log(tempWord);
                console.log(word[i]);

            }

        }
        console.log(counter);
        if (counter === 0) {
            console.log('not here!');
            //pushes the wrong guess into the wrong array
            wrong.push(' ' + userGuess + ' ');
            console.log(wrong);
            //stores the wrong array and puts it on the screen
            wrongLetters.textContent = wrong;
            numberGuess--;
            console.log(numberGuess);
            guessNumber.textContent = numberGuess;
        }

    }
    guessToScreen();

    function numberLives() {
        //if the numberGuess = 0
        if (numberGuess === 0) {
            lives--;
            livesNumber.textContent = lives;

        }

        if (lives === 0) {
            alert('you lose! Game Over!');
        }
    }

    numberLives();

    function gameContinue() {
        //if the totalCount is equal to the word length
        if (totalCount === wordGuess.length) {
            //reset the page except for lives 
            //grab a random word


            console.log("it's working!");
            textWord = [];
            wrong = [];
            wrongLetters.textContent = wrong;
            totalCount = 0;
            console.log(words.indexOf(word));
            //wordBlank();
            numberGuess = 12;
            guessNumber.textContent = numberGuess;

        }
    }

    gameContinue();

}