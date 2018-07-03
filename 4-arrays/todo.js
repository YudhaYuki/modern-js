// Create an array with five todos
    // You have x todoss
    // Print the first and the second to last item

// const todos = ['programming', 'looking for job', 'shower', 'cooking', 'watching'];


// console.log(`You have ${todos.length} to do`);
// console.log(`todos: ${todos[0]}`);
// console.log(`todos: ${todos[todos.length - 2]}`);
// console.log(todos)


// CHALLENGE
    // Delete the 3rd item
    // Add new item onto the end
    // Remove the first item from the list

// todos.splice(2, 1);
// todos.push('gardening');
// todos.shift();
// console.log(todos);

// console.log(`You have ${todos.length} to do`);



// 1. The first item
// 2. The second item

// todos.forEach(function(item, index) {
//     const num = index + 1;
//     console.log(`${num}. ${item}`)
// });


// Loop with for

// for (let i = 0; i < todos.length; i++) {
//     const num = i + 1;
//     const todo = todos[i];
    
//     console.log(`${num}. ${todo}`);
// }















const todos = [
    {
        text: 'Ordercat food',
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


const removeTodo = function (todos, todoText) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1);
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function(todo) {
        return !todo.completed ;
    })
}

const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        if (a.completed === false && b.completed ) {
            return -1;
        } else if (b.completed === false && a.completed ) {
            return 1;
        } else {
            return 0;
        }
    });
}

sortTodos(todos);
console.log(todos);

// console.log(getThingsToDo(todos))

// removeTodo(todos, 'buyy food');
// console.log(todos);