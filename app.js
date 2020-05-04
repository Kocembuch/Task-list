//  Variables
const tasksContainer = document.querySelector(".tasks-container ul");
const form = document.querySelector("form");
const input = document.querySelector("input");
// On DOM load
// document.addEventListener("DOMContentLoaded", function() {
//     showTasks();
// });

// Add new task
const addButton = document.querySelector(".btn-info");


addTask = (e) => {
    // console.log('sadj');
    e.preventDefault();
    const usersTask = input.value;
    
    if(usersTask === "") {
        return alert("Type the task")
    }
    
    const taskLi = document.createElement('li');
    tasksContainer.appendChild(taskLi);

    taskLi.innerHTML = `<div class="input-group mb-3"><button class="btn btn-success complete" type="button" id="button-addon2"><i class="fa fa-check"></i></button><input type="text" class="form-control" placeholder="Task title" aria-label="Recipient's username" value = ${usersTask} aria-describedby="button-addon2"><button class="btn btn-danger delete" type="button" id="button-addon2"><i class="fa fa-times"></i></button></div>`
    
    input.value = "";

    let btnChcecked = taskLi.querySelector(".complete");
    let btnDelete = taskLi.querySelector(".delete");

    const checkTask = () => {
        console.log('naciśnięto!');
        // taskLi.style.textDecoration = "line-through";
        taskLi.querySelector("input").classList.add("line");
    }
    
    btnChcecked.addEventListener("click", checkTask);

    const deleteTask = (e) => {
        taskLi.classList.add("clear");
    }

    btnDelete.addEventListener("click", deleteTask);

}

addButton.addEventListener("click", addTask);
form.addEventListener("submit", addTask);


