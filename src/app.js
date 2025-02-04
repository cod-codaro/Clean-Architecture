const express = require("express");
const makeTaskController = require("./controllers/task-controller");
const TaskRepository = require("./repositories/task-repository");

const app = express();
const port = process.env.PORT || 3000;
const taskRepository = new TaskRepository();
const taskController = makeTaskController({ taskRepository });

app.use(express.json());

app.post("/tasks", taskController.add);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
