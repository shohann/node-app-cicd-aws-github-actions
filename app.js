const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server new is healthy:", port: PORT });
});

app.listen(PORT, () => {
  console.log(`Server new is running on port ${PORT} `);
});
