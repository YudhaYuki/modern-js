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

// const paragraphs = document.querySelectorAll('p');

// paragraphs.forEach(function(paragraph) {
//     if (paragraph.textContent.includes('the')) {
//         paragraph.remove();
//     }
// });


// You have 2 todos left (p element)
// Add a p for each todo above (use text value)


const filters = {
    searchText: ''
};

const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
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



// const incompleteTodos = todos.filter(function (todo) {
//     return !todo.completed
// });

// const summary = document.createElement('h2');
// summary.textContent = `You have ${incompleteTodos.length} to do left`;
// document.querySelector('body').appendChild(summary);


// todos.forEach(function(todo) {
//     const p = document.createElement('p');
//     p.textContent = todo.text;
//     document.querySelector('body').appendChild(p);
// });

// document.querySelector('#add-todo').addEventListener('click', function(e) {
//     console.log('Add a new todo...');
// });

// document.querySelector('#new-todo-text').addEventListener('input', function(e) {
//     console.log(e.target.value);
// });

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
    e.target.elements.text.value = ''
})



