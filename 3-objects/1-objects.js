let myBook = {
    title: "1984",
    author: 'George Orwel',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal farm';

console.log(`${myBook.title} by ${myBook.author}`);


// Challange

let person = {
    name: 'Yudha',
    age: 27,
    location: 'Brussel'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age++;

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);