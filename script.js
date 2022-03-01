// Variables
const todoList = document.querySelector(".list-group");
const form = document.querySelector("#form");
const todoInput = document.querySelector("#todo");
const resetButton = document.querySelector("#resetbtn");

//  Call all event listeners
allEventListeners();

// Functions of all event listeners
/*
1. Add todo event
2. Remove and complete todo event
3. Clear or remove all todos
*/
function allEventListeners() {
  // Add todo event
  form.addEventListener("submit", addTodo);
  // Remove and complete todo event
  todoList.addEventListener("click", removeTodo);
  // Clear or remove all todos
  resetButton.addEventListener("click", clearTodoList);
}

// Adding todo item function
/*
1. Create a new li element
2. Add class
3. Add complete and remove icon
4. Create a new span element
5. Add class
6. Create a new text node and append to span
7. Append span to li
8. Append li to ul (todoList)
9. Clear input
10. Prevent default action
*/
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
/*
1. I'm using the event listener on the todo list to listen for a click on the trash icon.
2. If the user clicks on the trash icon, we’ll show a confirmation dialog.
3. If the user confirms the action, we’ll remove the todo from the list.
*/
function removeTodo(e) {
  // Remove todo
  if (e.target.classList.contains("trash")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.remove();
    }
  }

  // Complete todo
  /*
  1. When the user clicks on the text of the todo item, the class of the parent element is toggled.
  2. When the user clicks on the icon of the todo item, the class of the parent element is toggled.
  */
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
