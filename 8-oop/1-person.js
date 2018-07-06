const Person = function (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.getBio = function() {
    return `${this.firstName} is ${this.age}.`;
}

Person.prototype.location = 'Indonesia';

Person.prototype.setName = function(fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
}

const me = new Person('Yudha', 'Yuki', 36);
me.setName('Alexis Turner');
// console.log(me.location);
console.log(me.getBio());


const personTwo = new Person('Rika', 'Yuki', 27);
console.log(personTwo.getBio());