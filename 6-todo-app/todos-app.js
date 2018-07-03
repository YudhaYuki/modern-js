const todos = [
    {
        text: 'Order cat food',
        completed: false
    },
    {
        text: 'Clean kitchen',
        completed: true
    },
    {
        text: 'Buy food',
        completed: true
    },
    {
        text: 'Do work',
        completed: false
    },
    {
        text: 'Exercise',
        completed: true
    }
];

const filters = {
    searchText: '',
    hideCompleted: false
};

const renderTodos = function(todos, filters){
    let filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    filteredTodos = filteredTodos.filter(function (todo) {
        return !filters.hideCompleted || !todo.completed;
        // if (filters.hideCompleted) {
        //     return !todo.completed
        // } else {
        //     return true;
        // }
    });

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    });

    document.querySelector('#todos').innerHTML = '';
    
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('#todos').appendChild(summary);
    
    
    filteredTodos.forEach(function(todo) {
        const p = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('#todos').appendChild(p);
    });
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
        text: e.target.elements.text.value,
        completed: false
    });

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



