

const submitbtnRef = document.querySelector(".submit-btn");
const inputTaskRef = document.querySelector(".task-inp");
const clearTasksbtnRef = document.querySelector(".clear-btn");
const taskDataWrapperRef = document.querySelector(".task-data-wrapper");
const clearAllTasksbtnRef=document.querySelector(".clear-btn");
const taskListRef = document.querySelector(".task-list-count");


clearTasksbtnRef.addEventListener("click", clearAllTasks);
submitbtnRef.addEventListener("click", submitTask);



function submitTask() {

    const TaskName = inputTaskRef.value;
    const listItem = document.querySelector(".added-task-wrapper");
    const ListTag = document.createElement('div');
    
    clearAllTasksbtnRef.style.display = "block";
    taskListRef.innerText="List of tasks:"
    console.log(inputTaskRef.value);
    
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
    inputTaskRef.value = "";

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