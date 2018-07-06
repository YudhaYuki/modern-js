const Person = function (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const me = new Person('Yudha', 'Yuki', 27);
console.log(me);

const personTwo = new Person('Rika', 'Yuki', 27);
console.log(personTwo);