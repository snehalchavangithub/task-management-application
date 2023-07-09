var tasks = [];
var taskId = 1;
function renderTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach(function (task) {
        var taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = "<span>".concat(task.description, "</span>\n                                 <button class=\"deleteBtn\" data-id=\"").concat(task.id, "\">Delete</button>");
        taskList.appendChild(taskElement);
    });
    var deleteButtons = document.getElementsByClassName("deleteBtn");
    for (var i = 0; i < deleteButtons.length; i++) {
        var deleteButton = deleteButtons[i];
        deleteButton.addEventListener("click", handleDelete);
    }
}
function handleDelete(event) {
    var deleteButton = event.target;
    var taskId = parseInt(deleteButton.dataset.id);
    tasks = tasks.filter(function (task) { return task.id !== taskId; });
    renderTasks();
}
function handleAddTask() {
    var taskInput = document.getElementById("taskInput");
    var description = taskInput.value.trim();
    if (description !== "") {
        var newTask = {
            id: taskId++,
            description: description
        };
        tasks.push(newTask);
        renderTasks();
        taskInput.value = "";
    }
}
var addTaskBtn = document.getElementById("addTaskBtn");
addTaskBtn.addEventListener("click", handleAddTask);
renderTasks();
