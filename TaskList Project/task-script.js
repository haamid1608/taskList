// console.log("Hey");

const submitbtn = document.querySelector(".submit-btn");
submitbtn.addEventListener("click", submitTask);
const inputTask = document.querySelector(".task-inp");
const clearTasks = document.querySelector(".clear-btn");
clearTasks.addEventListener("click", clearAllTasks);

const taskDataWrapper = document.querySelector(".task-data-wrapper");
const clearAllTasksbtn=document.querySelector(".clear-btn");
const taskDets = document.querySelector(".task-list-count");

function submitTask() {
    // taskDataWrapper.style.display = "block";
    clearAllTasksbtn.style.display = "block";
    taskDets.innerText="List of tasks:"
    console.log(inputTask.value);
    const TaskName = inputTask.value;
    const listItem = document.querySelector(".added-task-wrapper");
    const ListTag = document.createElement('div');
    ListTag.className = "task-name";



    const taskLi = document.createElement('li');
    const deleteBtn = document.createElement('btn');
    deleteBtn.type = "submit";
    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = "Clear";

    listItem.appendChild(ListTag);
    taskLi.innerHTML = TaskName;
    ListTag.appendChild(taskLi);
    ListTag.appendChild(deleteBtn);
    inputTask.value = "";

    deleteBtn.addEventListener("click", deleteTask);


}

function deleteTask(e) {
    console.log(e.target.parentNode);
    e.target.parentNode.remove();
}

function clearAllTasks() {
    const TaskDetails = document.querySelector(".added-task-wrapper");
    TaskDetails.innerHTML = " ";
}