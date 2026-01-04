"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

// При помощи метода querySelector получаем элементы .form, .input и .todos
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement


const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todosList = document.querySelector(".todos");


const createTodoElement = (todo) => {
  const li = document.createElement("li");
  li.className = "todo";
  li.dataset.id = todo[todoKeys.id];

  const textDiv = document.createElement("div");
  textDiv.className = "todo-text";
  textDiv.textContent = todo[todoKeys.text];
  if (todo[todoKeys.is_completed]) {
    textDiv.style.textDecoration = "line-through";
  }

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "todo-actions";

  const completeBtn = document.createElement("button");
  completeBtn.className = "button-complete button";
  completeBtn.innerHTML = "&#10004;";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "button-delete button";
  deleteBtn.innerHTML = "&#10006;";

  actionsDiv.appendChild(completeBtn);
  actionsDiv.appendChild(deleteBtn);

  li.appendChild(textDiv);
  li.appendChild(actionsDiv);

  return li;
};


const handleCreateTodo = (text) => {
  if (!text.trim()) return;
  const newTodo = createTodo(todos, text.trim());
  const todoEl = createTodoElement(newTodo);
  todosList.appendChild(todoEl);
};


form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleCreateTodo(input.value);
  input.value = "";
});


todosList.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const li = btn.closest("li.todo");
  if (!li) return;

  const id = Number(li.dataset.id);

  if (btn.classList.contains("button-complete")) {
    const updated = completeTodoById(todos, id);
    if (updated) {

      const textDiv = li.querySelector(".todo-text");
      if (updated[todoKeys.is_completed]) {
        textDiv.style.textDecoration = "line-through";
      } else {
        textDiv.style.textDecoration = "none";
      }
    }
  } else if (btn.classList.contains("button-delete")) {
    deleteTodoById(todos, id);
    li.remove();
  }
});


const renderInitialTodos = () => {
  todos.forEach(todo => {
    const el = createTodoElement(todo);
    todosList.appendChild(el);
  });
};

renderInitialTodos();