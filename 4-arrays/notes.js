// const notes = [ {},
//     {
//         title: 'My next trip',
//         body: 'I would like to go to Spain'
//     },
//     {
//         title: 'Habbits to work on',
//         body: 'Exercise. Eating a bit better.'
//     },
//     {
//         title: 'Office modification',
//         body: 'Get a new seat'
//     }
// ];

// // console.log(notes.pop());
// // console.log(`You have just removed ${notes.pop()}`);
// // notes.push('My new note');

// // console.log(notes.shift());
// // console.log(notes.unshift('My first note'));

// // notes.splice(1, 0, 'This is the new second item');
// // notes.splice(1, 1, 'This is the new second item');

// // notes[2] = 'This is now the new note 3';

// // notes.forEach(function(item, index) {
// //     console.log(index);
// //     console.log(item);
// // });

// console.log(notes.length);
// console.log(notes);
// // console.log(notes[notes.length - 2]);


// // for (let i = 0; i < notes.length; i++) {
// //     console.log(notes[i]);
// // }



// // for (let i = notes.length - 1; i >= 0; i--) {
// //     console.log(notes[i]);
// // }


// // let someObject = {};
// // let otherObject = someObject;
// // console.log(someObject === otherObject);


// const index = notes.findIndex(function(note, index) {
//     console.log(note);
//     return note.title === 'Habbits to work on'
// })

// console.log(index);









const notes = [
    {
        title: 'My next trip',
        body: 'I would like to go to Spain'
    },
    {
        title: 'Habbits to work on',
        body: 'Exercise. Eating a bit better.'
    },
    {
        title: 'Office modification',
        body: 'Get a new seat'
    }
];


// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function(note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     })

//     return notes[index];
// }

const sortNotes = function(notes) {
    notes.sort(function(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    })
}

const findNotes = function(notes, query) {
    return notes.filter(function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isBodyMatch || isTitleMatch;
    });
}

// console.log(findNotes(notes, 'eating'));

// const note = findNote(notes, 'some other office modification');
// console.log(note);

sortNotes(notes);
console.log(notes);