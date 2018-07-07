// 1. Setup new "status" property with initial value of "playing"
// 2. Create method for recalculating status to "playing", "finish", or "failed"
// 3. Call that method after a guess is processed
// 4. Use console.log to print the status

// Start the game and see "playing"
// Make two inccorect guesses to see "failed"
// Refresh the browser and guess "c", "a", and "t" to see "finished"




const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';
};

Hangman.prototype.calculateStatus = function () {
    
    const finished = this.word.every((letter) => {
        return this.guessedLetters.includes(letter);
    });


    // const lettersUnguessed = this.word.filter((letter) => {
    //     return !this.guessedLetters.includes(letter);
    // });
    // const finished = lettersUnguessed.length === 0;


    // let finished = true;

    // this.word.forEach((letter) => {
    //     if (this.guessesLetters.includes(letter)) {
            
    //     } else {
    //         finished = false;
    //     }
    // });

    if (this.remainingGuesses === 0) {
        this.status = 'failed';
    } else if (finished) {
        this.status = 'finished';
    } else {
        this.status = 'playing';
    }
}

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

    this.calculateStatus();
}

