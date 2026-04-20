const http = require("http");
// require("dotenv").config();

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.end("About Page ⭐");
  } else if (req.url === "/contact-us") {
    res.end("contact page 🔎");
  } else if (req.url === "/api") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ name: "sharat", role: "developer" }));
  } else {
    res.end("Error 404 not found");
  }
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
