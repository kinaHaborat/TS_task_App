class Task {
  static currentId = 0;
  title: string;
  id: number;
  date: Date;
  order: number;

  constructor(title: string, date: Date, order: number) {
    this.title = title;
    this.id = Task.currentId++;
    this.date = date;
    this.order = order;
  }
  convertToString(): string {
    return `${
      this.title
    } ${this.id.toString()} ${this.date.toLocaleString()} ${this.order.toString()}`;
  }
}

// Create an Tasks Array
let taskList: Task[] = [];

// LocalStorage
function printTaskList() {
  taskList = JSON?.parse(localStorage.taskList);
  const taskListElem = document.getElementById("taskList");
  taskList?.forEach((task: any) => {
    let task_ = new Task(task.title, task.date, task.order);
    let li = document.createElement("li");
    let button = document.createElement("button") as HTMLButtonElement;
    button.setAttribute("id", `${task.id}`);
    button.setAttribute("onClick", `removeTask(${task.id})`);
    button.setAttribute("class", "delBtn button ");
    button.innerHTML = " X ";
    li.innerHTML = task_.convertToString();
    taskListElem?.appendChild(li);
    taskListElem?.appendChild(button);
  });
}

// Create Task
function createTask() {
  const inputElem = document.getElementById("title") as HTMLInputElement;
  const titleValue = inputElem?.value;
  taskList.push(new Task(titleValue, new Date(), 1));
  localStorage.taskList = JSON.stringify(taskList);
}
//Remove Task based on the specified item Id
function removeTask(taskId: number) {
  taskList = JSON.parse(localStorage.taskList);
  taskList = taskList.filter((taskItem) => taskItem.id !== taskId);
  localStorage.taskList = JSON.stringify(taskList);
  location.reload();
}
