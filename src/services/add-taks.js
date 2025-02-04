const Task = require("../entities/Task");

function addTask({ taskRepository }) {
  return async function (taskInfo) {
    const task = new Task(taskInfo);
    return await taskRepository.add(task);
  };
}

module.exports = addTask;
