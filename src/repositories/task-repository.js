class TaskRepository {
  constructor() {
    this.tasks = [];
  }

  async add(task) {
    this.tasks.push(task);
    return task;
  }

  async findById(id) {
    return this.tasks.find((task) => task.id === id);
  }
}

module.exports = TaskRepository;
