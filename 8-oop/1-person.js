// Prototypal Iheritance

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}.`;
        
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`;
        });
    
        return bio;
    }

    setName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }

}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes);
        this.position = position;
    }

    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}.`
    }

    getYearsLeft() {
        return 65 - this.age
    }
}


// const me = new Employee('Yudha', 'Yuki', 27, 'teacher', ['Learning', 'Cooking']);
// me.setName('Alexis Turner');
// console.log(me.getBio());
// console.log(me.getYearsLeft());

// const personTwo = new Person('Rika', 'Yuki', 36);
// console.log(personTwo.getBio());


// 1. Create class for students
// 2. Track student grad. 0 - 100
// 3. Override bio to print a passsing of failing message . 70 and above "Yudha us passing"
// 4. Create "updateGrade", that takes the amount to add or remove from grade

// Create student 
// Print status (failing or passing)
// Change grade to change status
// Print status again

class Student extends Person{
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes);
        this.grade = grade;
    }

    updateGrade(change) {
        this.grade += change;
    }

    getBio() {
        const status = this.grade >= 70 ? 'Passing' : 'Failing';
        return `${this.firstName} is ${status} the class`;
    }
}

const me = new Student('Yudha', 'Yuki', 27, 71, []);
console.log(me.getBio());
me.updateGrade(-5);
console.log(me.getBio());
