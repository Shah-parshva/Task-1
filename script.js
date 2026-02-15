const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");

document.addEventListener("DOMContentLoaded", loadTasks);


addBtn.addEventListener("click", addTask);


taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    createTaskElement(taskText);
    saveTasks();
    taskInput.value = "";
    updateCounter();
}

function createTaskElement(text, completed = false) {
    const li = document.createElement("li");
    li.textContent = text;

    if (completed) li.classList.add("completed");

    
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
        saveTasks();
    });

    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        li.remove();
        saveTasks();
        updateCounter();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            text: li.firstChild.textContent,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => createTaskElement(task.text, task.completed));
    updateCounter();
}

function updateCounter() {
    const total = document.querySelectorAll("#taskList li").length;
    taskCounter.textContent = `Total Tasks: ${total}`;
}
