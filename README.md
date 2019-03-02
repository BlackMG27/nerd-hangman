# Nerd Word Guess

## The Rules of the game are as follows:

1. User gets to the page
2. User sees instructions for the game
3. computer grabs a random (math.floor(math.random)) word and puts in on the screen in underline blanks

   - splits the word
   - joins the word horizontally

4. user makes the first guess

   - triggers onkeyup event
   - user guess is stored into variable userGuess (userGuess = event.key)
   - makes a for loop to check if the letter is one or more of the letters in the word

   - if the users guesses correctly, the letter shows up in the box
     - use the includes function to see if the userGuess is in the word (use .toLowerCase)
     - if the guess includes one of the word's letters then it will show up in the queue
   - if the user guesses incorrectly, the letter shows up to the side (push into the queue: an empty array)
     - makes the letters be pushed into an array
   - the total number of guesses they get is 12

5. If the user gets the word right, they get a point and the game continues
   - the game chooses another random word from the list and pushes the used word out
6. If the user runs out of guesses then they lose a life and the game continues
7. If the user loses 3 times, then they lose the game
8. Reset the game

- resets the game by pushing all the words back into the gameWords array
