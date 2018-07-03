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

// Query and remove
// const p = document.querySelector('p');
// p.remove();

// Query All and remove
// const ps = document.querySelectorAll('p');

// ps.forEach(function(p) {
    // p.remove()
//     p.textContent = '*****'
// })


// Add new element
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new element from javaScript';
// document.querySelector('body').appendChild(newParagraph);

// document.querySelector('#remove-all').addEventListener('click', function() {
//     console.log(`Remove all notes`);
// });

const filters = {
    searchText: ''
};

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector('#notes').innerHTML = '';
    
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.querySelector('#notes').appendChild(noteEl);
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
    e.target.textContent = 'The button was click !';
});

// document.querySelector('#remove-all').addEventListener('click', function(e){
//     document.querySelectorAll('.note').forEach(function(note) {
//         note.remove();
//     })
// });

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#name-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e.target.elements.firstName.value);
    e.target.elements.firstName.value = '';
});
