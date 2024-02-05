// list & task object business logic

function List() {
  this.tasks = {};
}

function Task(taskName) {
  this.task = taskName;
  this.status = "to-do"
}

List.prototype.newTask = function(taskToAdd) {
  this.tasks = taskToAdd;
}

// program business logic


let newList = new List();

function handleList(paramTask) {
  let userTask = new Task(paramTask);
  newList.newTask(userTask);
  console.log(newList);
}

handleList("do dishes");