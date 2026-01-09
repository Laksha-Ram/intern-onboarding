const express = require("express");
const app = express();

app.use(express.json());

let users = [];


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

app.post("/add-user", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "name and email are required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);

  return res.status(201).json({
    message: "User added successfully",
    user: newUser,
  });
});

app.get("/users", (req, res) => {
  return res.status(200).json(users);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
