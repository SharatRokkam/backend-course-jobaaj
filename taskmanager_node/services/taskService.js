const fs = require("fs");

function getTasks() {
  const data = fs.readFileSync("tasks.json", "utf-8");

  const tasks = JSON.parse(data || "[]");

  return tasks;
}

function addTask(task) {
  if (!task) {
    return { error: "Task is required" };
  }

  const tasks = getTasks();

  tasks.push(task);

  fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));

  return { message: "Task is successfully added" };
}

module.exports = { getTasks, addTask };
