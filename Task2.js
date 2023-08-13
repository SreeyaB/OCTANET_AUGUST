const taskInput = document.getElementById("taskInput");
const deadlineInput = document.getElementById("deadlineInput");
const priorityInput = document.getElementById("priorityInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value;
    const deadline = deadlineInput.value;
    const priority = priorityInput.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${taskText} (Deadline: ${deadline}, Priority: ${priority})</span>
        <button class="deleteBtn">Delete</button>
    `;

    taskItem.classList.add(priority);
    taskList.appendChild(taskItem);
   taskInput.value = "";
    deadlineInput.value = "";
    priorityInput.value = "low";

    const deleteBtn = taskItem.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
    });
}