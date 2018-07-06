// Create a method for making a guess
// 1. Should accept a character for guessing
// 2. Should add unique guesses to list of guesses
// 3. Should decrement the guesse left if a unique guess isn't a match


const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = ['c', 'e'];
};

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        }
    });

    return puzzle;
};

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (isUnique) {
        this.guessedLetters.push(guess);
    }

    if (isUnique && isBadGuess) {
        this.remainingGuesses = this.remainingGuesses - 1;
    }
}

const game1 = new Hangman('Cat', 2);

// Guess c, t, z
game1.makeGuess('c');
game1.makeGuess('t')
game1.makeGuess('z');

console.log(game1.getPuzzle()); // C*t
console.log(game1.remainingGuesses);   // print remaining guesses (Should be 1)



const game2 = new Hangman('New Jersey', 4);
game2.makeGuess('w'); // Guess w
console.log(game2.getPuzzle()); // **w ******


