const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('Car Parks', 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;   
});

getPuzzle('2').then((puzzle) => {
    console.log(puzzle);
}).catch((err) => {
    console.log(`Error: ${err}`);
});

getCountry('ID').then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(`Error: ${err}`)
});

// 1. Create getLocation function which takes no argument
// 2. Setup getLocation to make a request to the url and parse the data
// 3. Use getLocation to print the city, region, and country information

getLocation().then((location) => {
    console.log(`You are currently in ${location.city} ${location.region} ${location.country}!`)
    console.log(location);
}).catch((err) => {
    console.log(`Error: ${err}`)
});