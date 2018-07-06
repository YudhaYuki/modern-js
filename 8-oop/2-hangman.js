// 1. Create a constructor function for the hangman game
// 2. Setup two attributes. One for the word itself, another for the number of guesses allowed
// 3. Create two instances of it and print both to the console


const Hangman = function (word, remainingGuesses) {
    this.word = word;
    this.remainingGuesses = remainingGuesses;
};

const gameOne = new Hangman('Cat', 2);
console.log(gameOne);

const gameTwo = new Hangman('Paris', 3);
console.log(gameTwo);

