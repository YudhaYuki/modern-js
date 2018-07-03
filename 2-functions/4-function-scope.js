let convertFahrenheitToCelcisum = function(fahrenheit) {
    let resultInCelcius = (fahrenheit - 32) * 5/9;

    if (resultInCelcius <= 0) {
        let isFreezing = true;
    }
    
    return resultInCelcius;
}

let tempOne = convertFahrenheitToCelcisum(32);
let tempTwo = convertFahrenheitToCelcisum(68);


console.log(tempOne);
console.log(tempTwo)