let num = 103.941;

console.log(num.toFixed(10));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));


let min = 0;
let max = 1;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);



// CHALLENGE
// 1 - 5 - true if correct - false if not correct

let guestNumber = function (number) {
    let minNum = 1;
    let maxNum = 5;
    let randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

    return number === randomNumber;
}

console.log(guestNumber(2));