interface Task {
    id: number;
    description: string;
}

let tasks: Task[] = [];
let taskId = 1;

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `<span>${task.description}</span>
                                 <button class="deleteBtn" data-id="${task.id}">Delete</button>`;
        taskList.appendChild(taskElement);
    });

    const deleteButtons = document.getElementsByClassName("deleteBtn");
    for (let i = 0; i < deleteButtons.length; i++) {
        const deleteButton = deleteButtons[i] as HTMLButtonElement;
        deleteButton.addEventListener("click", handleDelete);
    }
}


function handleAddTask() {
    const taskInput = document.getElementById("taskInput") as HTMLInputElement;
    const description = taskInput.value.trim();

    if (description !== "") {
        const newTask: Task = {
            id: taskId++,
            description: description
        };

        tasks.push(newTask);
        renderTasks();
        taskInput.value = "";
    }
}
function handleDelete(event: Event) {
    const deleteButton = event.target as HTMLButtonElement;
    const taskId = parseInt(deleteButton.dataset.id);
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}

const addTaskBtn = document.getElementById("addTaskBtn");
addTaskBtn.addEventListener("click", handleAddTask);

renderTasks();
