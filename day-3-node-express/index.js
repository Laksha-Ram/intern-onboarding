// Refactoring comments added as part of Day 5 Git discipline task
// Import Express Framework
const express = require("express");

// Create an Express Application
const app = express();

//Middleware
app.use(express.json());

// In-memory data storage 
let users = [];

// Server configuration
const PORT = 3000;

// Health Check route
app.get("/health", (req, res) => {
  res.send("Server is healthy ;) ");
});

// Basic Greeting Route
app.get("/hello", (req, res) => {
  res.send("Hello from my first Express server :) ");
});

//Current time route
app.get("/time", (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.send(`Current time is ${currentTime}`);
});

// Add user
app.post("/add-user", (req, res) => {
  const { name, email } = req.body;

  // Input validation 
  if (!name || !email) {
    return res.status(400).json({ message: "name and email are required" });
  }

  // Create a new user object
  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  // Store user in memory
  users.push(newUser);

  return res.status(201).json({
    message: "User added successfully",
    user: newUser,
  });
});

// Start the server
app.get("/users", (req, res) => {
  return res.status(200).json(users);
});

// Server listens on the specified port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
