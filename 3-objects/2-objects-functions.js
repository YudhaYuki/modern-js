let myBook = {
    title: "1984",
    author: 'George Orwel',
    pageCount: 326
}

let otherBook = {
    title: "A peoples history",
    author: 'Howard Zinn',
    pageCount: 723
}

// let getSummary = function (book) {
//     console.log(`${book.title} by ${book.author}`)
// }

// getSummary(myBook);
// getSummary(otherBook);


let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`        
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);







// CHALLENGE
// Create a function - take fahrenheit in - return object with all three =

let convertFahrenheit = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celcius: (fahrenheit - 32) * (5/9),
        kelvin: (fahrenheit + 459.67) * (5/9)
    }
}

let temp = convertFahrenheit(74);
console.log(temp.celcius);

