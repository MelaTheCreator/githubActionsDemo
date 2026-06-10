import { addTodoList } from "./index.js";

describe("addTodoList", () => {
  let list;
  let todos;

  beforeEach(() => {
    document.body.innerHTML = '<ul id="todo-list"></ul>';
    list = document.getElementById("todo-list");
    todos = [];
  });

  test("should add a task to the list and update localStorage", () => {
    const task = "Test Task";
    addTodoList(list, task, todos);
    expect(list.children.length).toBe(1);
    expect(list.children[0].textContent).toBe(task);
    expect(todos).toContain(task);
    expect(localStorage.getItem("todos")).toBe(JSON.stringify(todos));
  });

  //   test('should remove a task from the list and update localStorage on click', () => {
  //     const task = 'Test Task';
  //     addTodoList(list, task, todos);
  //     list.children[0].click();
  //     expect(list.children.length).toBe(0);
  //     expect(todos).not.toContain(task);
  //     expect(localStorage.getItem('todos')).toBe(JSON.stringify(todos));
  //   });
});
