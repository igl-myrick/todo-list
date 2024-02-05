Describe: addTask()

Test: "It will return a task object."
Code: addTask("do dishes");
Expected Result: Object { task: "do dishes" }

Test: "It will return a task object with a status."
Code: addTask("do dishes");
Expected Result: Object { task: "do dishes", status: "to-do" }

Test: "It will return a List object with the user's tasks."
Code: addTask("do dishes");
Expected Result: Object { tasks: Object { task: 'do dishes' } }

Test: "It will return the user's list of tasks in a readable form."
Code: addTask("do dishes");
Expected Result: "task: do dishes, status: to-do"

Describe: List.prototype.updateTask()

Test: "It will update a task object with a replaced status."
Code: List.updateTask("do dishes", 1);
Expected Result: { task: "do dishes", status: "completed" }

Describe: List.prototype.deleteTask()

Test: "It will remove a designated task object from the list object."
Code: List.deleteTask("do dishes");
Expected Result: Object { list: {...} }