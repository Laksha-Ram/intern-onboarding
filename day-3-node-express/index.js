const express = require("express");

const app = express();
const PORT = 3000;

app.get("/health", (req, res) => {
  res.send("Server is healthy ;) ");
});

app.get("/hello", (req, res) => {
  res.send("Hello from my first Express server :) ");
});

app.get("/time", (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.send(`Current time is ${currentTime}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
