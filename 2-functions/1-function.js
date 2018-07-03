// Function - input (argument), code, output(return value)

let greetUser = function() {
    console.log('Hi, welcome !');
}
greetUser();
greetUser();
greetUser();


let square = function(num) {
    let result = num * num;
    return result;
}

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);



// CHALLENGE

let convertFahrenheitToCelcisum = function(fahrenheit) {
    let resultInCelcius = (fahrenheit - 32) * 5/9;
    return resultInCelcius;
}

let tempOne = convertFahrenheitToCelcisum(32);
let tempTwo = convertFahrenheitToCelcisum(68);


console.log(tempOne);
console.log(tempTwo)