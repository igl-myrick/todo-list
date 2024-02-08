// list & task object business logic

function List() {
  this.taskList = {};
}

List.prototype.newTask = function(task) {
  this.taskList[task.taskName] = task;
}

List.prototype.deleteTask = function(taskName) {
  delete this.taskList[taskName];
}

function Task(taskName) {
  this.taskName = taskName;
  this.taskStatus = "to-do"
}

Task.prototype.updateTask = function() {
  if (this.taskStatus === "to-do") {
    this.taskStatus = "completed";
  } else if (this.taskStatus === "completed") {
    this.taskStatus = "to-do";
  }
}

// program business logic

let newList = new List();

function addTask(paramTask) {
  let userTask = new Task(paramTask);
  newList.newTask(userTask);
}

function displayTasks(paramTask) {
   return "task: " + newList.taskList[paramTask].taskName + ", status: " + newList.taskList[paramTask].taskStatus;
}

function displayList() {
  let keysArr = Object.keys(newList.taskList);
  keysArr.forEach(function(element) {
    console.log(displayTasks(element));
  })
}