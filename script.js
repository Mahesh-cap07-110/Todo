document.addEventListener("DOMContentLoaded", () => {
    const todoList = document.getElementById("todo-list");
  

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => {
    
        data.forEach(todo => {
          const todoItem = document.createElement("li");
          todoItem.classList.add("todo-item"); 
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.id = `todo-${todo.id}`;
          checkbox.classList.add("checkbox"); 
          const label = document.createElement("label");
          label.setAttribute("for", `todo-${todo.id}`);
          label.textContent = todo.title;
          todoItem.appendChild(label);
          todoItem.appendChild(checkbox);
          todoList.appendChild(todoItem);
        });
      })
      .catch(error => console.error("Error fetching todos:", error));
  });
  
  
  