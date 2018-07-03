// Multiple arguments
let add = function (a, b, c = 6) {
    return a + b + c;
}

let result = add(10, 1);
console.log(result);



// Default arguments
let getScoreText = function(name = 'Anonymous', score = 5) {
    return `${name} got ${score} points`
}

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);



// CHALLENGE

let getTip = function(total, tipPercent = .2) {
    let percent = tipPercent * 100;
    let tip = total * tipPercent;
    return `A ${percent}% tip on $${total} is $${tip}`;
}

let tip = getTip(60);
console.log(tip);