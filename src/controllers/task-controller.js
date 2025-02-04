const addTask = require("../services/add-taks");

module.exports = function makeTaskController({ taskRepository }) {
  const add = async (req, res) => {
    const { title, description } = req.body;
    try {
      const task = await addTask({ taskRepository })({ title, description });
      res.status(201).json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  return {
    add,
  };
};
