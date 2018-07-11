import { getNotes, createNote, removeNote, updateNote } from './notes';
import { getFilters, setFilters } from './filters';

// console.log(getNotes());
// createNote();
// removeNote('1');

// updateNote('26f0f139-b5f0-4918-9ff8-13e75a3adacd', {
//     title: 'My note title',
//     body: 'this is the body for my note.'
// })
// console.log(getNotes());


console.log(getFilters());
setFilters({
    searchText: 'office',
    sortBy: 'byCreated'
})
console.log(getFilters());
