"use strict";
class Task {
    constructor(title, id, date, order) {
        this.title = title;
        this.id = id;
        this.date = date;
        this.order = order;
    }
    convertToString() {
        return `${this.title} ${this.id.toString()} ${this.date.toLocaleString()} ${this.order.toString()}`;
    }
}
let taskList = [];
function printTaskList() {
    taskList = JSON.parse(localStorage.taskList);
    console.log(taskList);
    const taskListElem = document.getElementById("taskList");
    taskList === null || taskList === void 0 ? void 0 : taskList.forEach((task) => {
        let task_ = new Task(task.title, task.id, task.date, task.order);
        let li = document.createElement("li");
        li.innerHTML = task_.convertToString();
        taskListElem === null || taskListElem === void 0 ? void 0 : taskListElem.appendChild(li);
    });
}
function createTask() {
    const inputElem = document.getElementById("title");
    const titleValue = inputElem === null || inputElem === void 0 ? void 0 : inputElem.value;
    taskList.push(new Task(titleValue, 1, new Date(), 1));
    localStorage.taskList = JSON.stringify(taskList);
}
//# sourceMappingURL=index.js.map