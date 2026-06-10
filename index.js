export function addTodoList(list, task, todos) {
  const listItem = document.createElement("li");
  listItem.textContent = task;
  listItem.addEventListener("click", function () {
    this.remove();
    todos.splice(todos.indexOf(task), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  });
  list.appendChild(listItem);
  if (!todos.includes(task)) {
    todos.push(task);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}

function init() {
  const input = document.getElementById("todo-input");
  const form = document.getElementById("todo-form");
  const list = document.getElementById("todo-list");
  if (!form || !input || !list) return;
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((task) => addTodoList(list, task, todos));

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const task = input.value.trim();
    input.value = "";
    if (task) {
      addTodoList(list, task, todos);
    }
  });
}

init();
