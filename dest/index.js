"use strict";
class Task {
    constructor(title, date, order) {
        this.title = title;
        this.id = Task.currentId++;
        this.date = date;
        this.order = order;
    }
    convertToString() {
        return `${this.title} ${this.id.toString()} ${this.date.toLocaleString()} ${this.order.toString()}`;
    }
}
Task.currentId = 0;
let taskList = [];
function printTaskList() {
    taskList = JSON === null || JSON === void 0 ? void 0 : JSON.parse(localStorage.taskList);
    const taskListElem = document.getElementById("taskList");
    taskList === null || taskList === void 0 ? void 0 : taskList.forEach((task) => {
        let task_ = new Task(task.title, task.date, task.order);
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.setAttribute("id", `${task.id}`);
        button.setAttribute("onClick", `removeTask(${task.id})`);
        button.setAttribute("class", "delBtn button ");
        button.innerHTML = " X ";
        li.innerHTML = task_.convertToString();
        taskListElem === null || taskListElem === void 0 ? void 0 : taskListElem.appendChild(li);
        taskListElem === null || taskListElem === void 0 ? void 0 : taskListElem.appendChild(button);
    });
}
function createTask() {
    const inputElem = document.getElementById("title");
    const titleValue = inputElem === null || inputElem === void 0 ? void 0 : inputElem.value;
    taskList.push(new Task(titleValue, new Date(), 1));
    localStorage.taskList = JSON.stringify(taskList);
}
function removeTask(taskId) {
    taskList = JSON.parse(localStorage.taskList);
    taskList = taskList.filter((taskItem) => taskItem.id !== taskId);
    localStorage.taskList = JSON.stringify(taskList);
    location.reload();
}
//# sourceMappingURL=index.js.map