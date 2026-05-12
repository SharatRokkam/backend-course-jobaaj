const http = require("http");
const fs = require("fs");
const path = require("path");

// File path
const filePath = path.join(__dirname, "tasks.json");

// Create server
const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  // GET tasks
  if (req.method === "GET" && req.url === "/tasks") {
    try {
      const data = fs.readFileSync(filePath, "utf-8");
      const tasks = JSON.parse(data || "[]");

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(tasks));
    } catch (err) {
      res.writeHead(500);
      return res.end("Error reading tasks");
    }
  }

  // POST task
  if (req.method === "POST" && req.url === "/tasks") {
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const { task } = JSON.parse(body);

        if (!task) {
          res.writeHead(400);
          return res.end("Task is required");
        }

        const data = fs.readFileSync(filePath, "utf-8");
        const tasks = JSON.parse(data || "[]");

        tasks.push(task);

        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));

        res.writeHead(201);
        res.end("Task added");
      } catch (err) {
        res.writeHead(500);
        res.end("Invalid data");
      }
    });

    return;
  }

  // Default route
  res.writeHead(404);
  res.end("Route not found");
});

// Start server
server.listen(3000, () => {
  console.log("Server running on port 3000");
});