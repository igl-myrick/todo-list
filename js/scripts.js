// list & task object business logic

function List() {
  this.tasks = {};
}

function Task(taskName) {
  this.task = taskName;
}

// program business logic

let newTask = new Task("do dishes");
console.log(newTask)