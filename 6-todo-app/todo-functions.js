// Fetch exisiting todos from local storage
// getSavedTodos

const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos');
    
    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }
} 

// Save todo to localStorage
// saveTodos 
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}


// Render application todos based on filters
// renderTodos
const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

        return searchTextMatch && hideCompletedMatch;
    });


    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    });

    document.querySelector('#todos').innerHTML = '';
    
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));
    
    filteredTodos.forEach(function(todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    });
};


// Get the DOM elements for an individual note
// generateTodoDOM
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

    
    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox');
    todoEl.appendChild(checkbox);

    // Setup the todo text
    todoText.textContent = todo.text;
    todoEl.appendChild(todoText);

    // Setup the remove button
    removeButton.textContent = 'x';
    todoEl.appendChild(removeButton);
    
    return todoEl ;

    // const p = document.createElement('p');
    // p.textContent = todo.text;
    // return p;
}

// Get the DOM elements for list summary
// generateSummaryDOM

const generateSummaryDOM = function(incompleteTodos) {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    return summary;
}
