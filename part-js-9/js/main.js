import { renderTodos, initTodoHandlers } from "./dom.js";
import { getTodosFromLocalStorage } from "./storage.js";

const todos = getTodosFromLocalStorage() || [];

renderTodos(todos);
initTodoHandlers(todos);
