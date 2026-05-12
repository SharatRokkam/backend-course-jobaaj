const http = require("http");
const { getTasks, addTask } = require("./services/taskService");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/tasks") {
    const tasks = getTasks();

    return res.end(JSON.stringify(tasks));
  }

  if (req.method === "POST" && req.url === "/tasks") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const { task } = JSON.parse(body);

        const result = addTask(task);

        if (result.error) {
          return res.end(result.error);
        }

        res.end(result.message);
      } catch (err) {
        res.end(err);
      }

      res.end("Task Added");
    });

    return;
  }

  res.end("404 Not Found");
});

server.listen(5000, () => {
  console.log("server running successfully");
});
