let notes = getSavedNotes();

const filters = {
    searchText: '',
    sortBy: 'byEdited'
};

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
    const id = uuidv4();
    const timestamp = moment().valueOf();

    notes.push({
        id: id,
        title:'',
        body:'',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes);
    renderNotes(notes, filters);
    location.assign(`/edit.html#${id}`);
});

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', function(e){
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
});


window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
        // parse the new data and update notes
        notes = JSON.parse(e.newValue);

        // Render the notes
        renderNotes(notes, filters);
    };
});


// 1. Add createdAt and updateAt to the new notes (store timestamp);
// 2. Update updateAt when someone edits a title or body
// 3. Delete all old notes before testing