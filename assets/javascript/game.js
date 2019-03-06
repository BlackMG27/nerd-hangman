//set up the initial variables get the random word to show up first

var numberGuess = 15;
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
    "superman",
    "xena",
    "pokemon"
];
//gets a random word from the words array
var word = words[Math.floor(Math.random() * words.length)];

//stores the word for later needed to change the
var space = '_';
//needed to store the wrong letters
var wrong = [];
//grabs the divs from HTML
var wordResult = document.getElementById('wordResult');
var wrongLetters = document.getElementById('wrongLetters');
var guessNumber = document.getElementById('numberGuesses');
var nextWord = document.getElementById('nextWord');
var resultPhrase = document.getElementById('resultPhrase');
var wordHints = document.getElementById('wordHint');
//puts the current number to the screen
guessNumber.textContent = numberGuess;
//initial button setup
nextWord.style.display = 'none';
//Global count function
var totalCount = 0;
var tempWord = new Array();
var tempJoin;
var letterCheck = new Array();

function wordGrab() {
    word = words[Math.floor(Math.random() * words.length)];
}

var wordGuess = word;

function wordBlank() {
    //makes the word into an array need to
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

function resetWord() { //finds the place of the guessed word
    console.log(wordGuess, ' This is the word');
    var index = words.indexOf(wordGuess);
    //console.log(index); removes the guessed word
    words.splice(index, 1);
    console.log(words);
    //tell the function to grab another word
    wordGrab();
    wordGuess = word;
    word = word.split('');
    //iterates over the word array
    for (let i = 0; i < word.length; i++) {
        //replaces each letter with an underscore and space
        word[i] = space;
    }
    word = word.join('');
    //console.log(word); //puts the new 'word' onto the page
    wordResult.textContent = word;
    //console.log(words);
}
// so that the tempWord doesn't restart at zero
tempWord = word.split('');
//provides the hints
function updateHints() {
    switch (wordGuess) {
        case 'spiderman':
            wordHints.textContent = "Your Friendly New York Neighborhood...";
            break;
        case 'inuyasha':
            wordHints.textContent = "Tessaiga wielding hot head of Japan's feudal era fairy tale.";
            break;
        case 'naruto':
            wordHints.textContent = "Konoha's number one Hokage!";
            break;
        case 'wolverine':
            wordHints.textContent = "The most famous adamantium clawed X-men member";
            break;
        case 'batman':
            wordHints.textContent = "The caped crusader";
            break;
        case 'dragonball':
            wordHints.textContent = "Goku is the main character of this franchise";
            break;
        case 'rogue':
            wordHints.textContent = "X-men's sweet southern belle";
            break;
        case 'thor':
            wordHints.textContent = "Norse and Marvel's god of thunder";
            break;
        case 'storm':
            wordHints.textContent = "Marvel's weather goddess";
            break;
        case 'cyclops':
            wordHints.textContent = "Leader of the X-Men";
            break;
        case 'gambit':
            wordHints.textContent = "X-Men's cajun smooth talker";
            break;
        case 'flash':
            wordHints.textContent = "DC's fastest man alive";
            break;
        case 'natsu':
            wordHints.textContent = "Fairy Tail's most boisterous member";
            break;
        case 'jostar':
            wordHints.textContent = "last name of the first two Jojos in Jojo's Bizarre Adventure";
            break;
        case 'superman':
            wordHints.textContent = "DC's OP big good";
            break;
        case 'xena':
            wordHints.textContent = "Warrior Princess";
            break;
        case 'pokemon':
            wordHints.textContent = "Gotta catch 'em all!";
            break;

    }
}

updateHints();

document.onkeyup = function () {
    //1. Create the variables
    var userGuess = event.key;
    //puts all of the guesses into an array
    if (letterCheck.includes(userGuess)) {
        return;
    }
    letterCheck.push(userGuess);

    // checks to see if the code is working //console.log(userGuess);
    // //console.log(wordGuess); //console.log(letterCheck); switch case the hints
    // based on the wordGuess

    function guessToScreen() {
        //iterate over the word again
        var counter = 0;

        //the word has to be made into an array
        for (var i = 0; i < wordGuess.length; i++) {

            //check to see if the letter guessed is one of the letters of the word
            if (wordGuess[i] === userGuess) {
                //console.log('You got one!'); for the userGuess to take the place of word[i]
                tempWord[i] = userGuess;
                // if the tempWord includes userGuess turns the word array back into a string if
                // userGuess is already in tempWord
                tempJoin = tempWord.join('');
                wordResult.textContent = tempJoin;

                // //console.log(word);
                counter++;
                //keeps track of the total number of letters in the word
                totalCount++;
                // //console.log(counter); //console.log(totalCount); //
                // //console.log(tempWord); //console.log(word[i]);

            }

        }
        if (counter === 0) {
            //console.log('not here!'); pushes the wrong guess into the wrong array
            wrong.push(' ' + userGuess + ' ');
            // //console.log(wrong); stores the wrong array and puts it on the screen
            wrongLetters.textContent = wrong;
            numberGuess--;
            // //console.log(numberGuess); updates the number of guesses left
            guessNumber.textContent = numberGuess;
        }

    }
    guessToScreen();

    //signals to resume the game once the word is guessed correctly or not
    function gameContinue() {
        //if the totalCount is equal to the word length
        if (totalCount === wordGuess.length) {
            resultPhrase.textContent = "Congratulations You Won! Feeling Lucky?";
            newWord();
        } else if (numberGuess === 0) {
            resultPhrase.textContent = "Sorry! You lost this round. The word was " + wordGuess + ". Want to try again?";
            newWord();
        }
    }

    gameContinue();

    function newWord() {
        nextWord.style.display = 'block';
        nextWord.onclick = function () {
            //should grab another random word location.reload();
            resetWord();
            //wordGrab(); reset the page except for lives grab a random word
            tempWord = word.split('');
            //console.log(word, wordGuess);
            wrong = [];
            letterCheck = [];
            wrongLetters.textContent = wrong;
            totalCount = 0;
            numberGuess = 15;
            guessNumber.textContent = numberGuess;
            resultPhrase.textContent = '';
            nextWord.style.display = 'none';
            // tempWord = [];
            tempJoin = null;
            updateHints();
        }
    }
}