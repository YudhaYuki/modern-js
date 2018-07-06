const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
}

Person.prototype.getBio = function() {
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`;
    });

    return bio;
}

Person.prototype.location = 'Indonesia';

Person.prototype.setName = function(fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
}

const me = new Person('Yudha', 'Yuki', 27, ['Learning', 'Cooking']);
me.setName('Alexis Turner');
// console.log(me.location);
console.log(me.getBio());


const personTwo = new Person('Rika', 'Yuki', 36);
console.log(personTwo.getBio());