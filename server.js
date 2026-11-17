const express = require("express");
const app = express();

// Serve HTML, CSS, and JS files from the 'public'
app.use(express.static("public"));

// Existing route
app.get("/user-count", (req, res) => {
  res.json({ count: 15 });
});

// 3 New Useful Routes
app.get("/about", (req, res) => {
  res.json({ message: "This is my Node.js webserver assignment." });
});

app.get("/status", (req, res) => {
  res.json({ status: "Server is running!" });
});

app.get("/time", (req, res) => {
  res.json({ time: new Date().toLocaleTimeString() });
});

app.listen(9000, () => console.log("Running on http://localhost:9000"));
