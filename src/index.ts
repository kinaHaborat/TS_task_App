class Task {
  title: string;
  id: number;
  date: Date;
  order: number;

  constructor(title: string, id: number, date: Date, order: number) {
    this.title = title;
    this.id = id;
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
  taskList = JSON.parse(localStorage.taskList);
  console.log(taskList);
  const taskListElem = document.getElementById("taskList");
  taskList?.forEach((task: any) => {
    let task_ = new Task(task.title, task.id, task.date, task.order);
    let li = document.createElement("li");
    li.innerHTML = task_.convertToString();
    taskListElem?.appendChild(li);
  });
}

// Create Task - its printing the full array for now
function createTask() {
  const inputElem = document.getElementById("title") as HTMLInputElement;
  const titleValue = inputElem?.value;
  taskList.push(new Task(titleValue, 1, new Date(), 1));
  localStorage.taskList = JSON.stringify(taskList);
}
