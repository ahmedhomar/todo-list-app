// Variables
const todoList = document.querySelector(".list-group");
const form = document.querySelector("#form");
const todoInput = document.querySelector("#todo");
const resetButton = document.querySelector("#resetbtn");

//  Call all event listeners
allEventListeners();

// Functions of all event listners
function allEventListeners() {
  // Add todo event
  form.addEventListener("submit", addTodo);
  // Remove and complete todo event
  todoList.addEventListener("click", removeTodo);
  // Clear or remove all todos
  resetButton.addEventListener("click", clearTodoList);
  // Search todo event
}

// Adding todo item function
function addTodo(e) {
  if (todoInput.value != "") {
    // Create li element
    const li = document.createElement("li");
    // Add class
    li.className = "list-group-item";
    // Add complete and remove icon
    li.innerHTML = `<i class="done-icon"></i>
                        <i class="check-square done-icon"></i>
                        <i class="trash"></i>`;
    // Create span element
    const span = document.createElement("span");
    // Add class
    span.className = "todo-text";
    // Create text node and append to span
    span.appendChild(document.createTextNode(todoInput.value));
    // Append span to li
    li.appendChild(span);
    // Append li to ul (todoList)
    todoList.appendChild(li);

    // Clear input
    todoInput.value = "";
  } else {
    alert("Please add a todo");
  }

  e.preventDefault();
}

// Remove and complete todo item function
function removeTodo(e) {
  // Remove todo
  if (e.target.classList.contains("trash")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.remove();
    }
  }

  // Complete todo
  if (e.target.classList.contains("todo-text")) {
    e.target.parentElement.classList.toggle("done");
  }
  if (e.target.classList.contains("done-icon")) {
    e.target.parentElement.classList.toggle("done");
  }
}

// Clear or remove all todos function
function clearTodoList() {
  todoList.innerHTML = "";
}
