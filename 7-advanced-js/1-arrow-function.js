const square = (num) => num * num;


const squareLong = (num) => {
    return num * num;
}

console.log(square(3));


const people = [
    {
        name: 'Yudha',
        age: 27
    },
    {
        name: "Erna",
        age: 31
    },
    {
        name: "Harisman Harismon",
        age: 22
    }
]


// const under30 = people.filter (function (person) {
//     return person.age < 30
// });

const under30 = people.filter ((person) => person.age < 30);

console.log(under30);



// 1. Find person with age 22
// 2. Print that persons name

const age22 = people.find ((person) => person.age === 22 );
console.log(age22.name);