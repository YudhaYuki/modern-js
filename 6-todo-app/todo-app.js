let todos = getSavedTodos();

const filters = {
    searchText: '',
    hideCompleted: false
};





renderTodos(todos, filters);


document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});

document.querySelector('#new-todo').addEventListener('submit', function(e) {
    // 1. Setup an submit handler and cancel the default action
    e.preventDefault();

    // 2. Add new item to the todos array with that text data (completed value of false)
    todos.push({
        id: uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    });

    saveTodos(todos);

    // 3. Rerender the application
    renderTodos(todos, filters);

    // 5. Clear input value
    e.target.elements.text.value = '';
});

document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});


// 1. Create a checkbox and setup event listener -> 'Hide completed"
// 2. Create new hideCompleted filter (default false)
// 3. Update hideCompleted an rerender list on checkbox change
// 4. Setup renderTools to remove completed items



