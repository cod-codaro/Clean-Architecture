class Task {
  constructor({ id, title, description, isCompleted = false }) {
    if (!title) throw new Error("Task must have a title.");
    this.id = id;
    this.title = title;
    this.description = description;
    this.isCompleted = isCompleted;
  }
}

module.exports = Task;
