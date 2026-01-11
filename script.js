const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let todos = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const task = input.value.trim();
  if (task === "") return;
  todos.push(task);
  input.value = "";
  renderTodos();
});

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach(function (todo) {
    const li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  });
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  const stored = localStorage.getItem("todos");
  if (stored) {
    todos = JSON.parse(stored);
    renderTodos();
  }
}
loadTodos();
