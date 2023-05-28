interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.getElementById("btn") as HTMLButtonElement;
const input = document.getElementById("todoinput") as HTMLInputElement;
const form = document.getElementById("todoform") as HTMLFormElement;
const ul = document.getElementById("todolist") as HTMLUListElement;

const readTodos = (): Todo[] => {
  const todosJson = localStorage.getItem("todos");
  if (todosJson === null) return [];
  return JSON.parse(todosJson);
};

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const todos: Todo[] = readTodos();

let num = 0;
const handleSubmit = (event: Event) => {
  event.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  createTodo(newTodo);
  todos.push(newTodo);

  //console.log(todos);

  saveTodos();

  input.value = "";
};

const createTodo = (todo: Todo) => {
  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `check_${num++}`;
  checkbox.checked = todo.completed;

  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;
    saveTodos();
  });
  newLi.append(todo.text);
  newLi.append(checkbox);
  ul.append(newLi);
};

todos.forEach(createTodo);

form.addEventListener("submit", handleSubmit);

// btn.addEventListener("click", () => {
//   let val = input.value;
//   alert(val);
// });
