//* Dom-Elements-TS-Level-3_1

const inputElement = document.querySelector('#todo-input') as HTMLInputElement;
const addButton = document.querySelector('#add-btn') as HTMLButtonElement;
const todoList = document.querySelector('#todo-list') as HTMLElement;

let todos: { text: string, completed: boolean }[] = [];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => toggleCompleted(index));

        const todoText = document.createElement('span');
        todoText.textContent = todo.text;
        if (todo.completed) {
            todoText.classList.add('completed');
        }

        const deleteButton = document.createElement('span');
        deleteButton.textContent = '✖';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => deleteTodo(index));

        label.appendChild(checkbox);
        label.appendChild(todoText);
        todoItem.appendChild(label);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    });
}

function addTodo() {
    const todoText = inputElement.value.trim();
    if (todoText !== '') {
        todos.push({ text: todoText, completed: false });
        inputElement.value = '';
        renderTodos();
    }
}

function toggleCompleted(index: number) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

function deleteTodo(index: number) {
    if (todos[index].completed) {
        todos.splice(index, 1);
        renderTodos();
    } else {
        alert('Sie können nur abgeschlossene Aufgaben löschen!');
    }
}

addButton.addEventListener('click', addTodo);