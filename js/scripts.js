// list & task object business logic

function List() {
  this.tasks = {};
}

function Task(taskName) {
  this.task = taskName;
  this.status = "to-do"
}

// program business logic

let newTask = new Task("do dishes");
console.log(newTask)