const express = require("express");
const app = express();

const PORT = 5000;

app.get("/health", (req, res) => {
  res.send("Server is healthy ;)");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
