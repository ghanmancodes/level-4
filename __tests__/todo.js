let todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
/* eslint-disable no-undef */
describe("TodoList  Test Suite", () => {
  beforeAll(() => {
    // Seed the test data
    [
      {
        title: "pay rent",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "buy milk",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
    ].forEach(add);
  });
  test("Should add a new todo", () => {
    expect(all.length).toEqual(2);

    add({
      title: "A test item",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(3);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("Should retrieve overdue items", () => {
    expect(overdue().length).toEqual(0);
  });

  test("Should retrieve due today items", () => {
    expect(dueToday().length).toEqual(3);
  });

  test("Should retrieve due later items", () => {
    expect(dueLater().length).toEqual(0);
  });
});
